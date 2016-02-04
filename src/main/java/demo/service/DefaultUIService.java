package demo.service;

import com.google.common.base.Charsets;
import com.google.common.io.Resources;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class DefaultUIService implements UIService {

    Logger log = LoggerFactory.getLogger(DefaultUIService.class);

    private List<String> css;
    private String js;

    private List<String> getActiveUIPlugins(){
        // In spring cloud world this would lookup active services which provide a ui component
        return Arrays.asList(
            "dashboard-components",
            "dashboard-layout",
            "dashboard-pages",
            "dashboard-router",
            "dashboard-feature-basic"
        );
    }

    private void updateCSSImports() {
        // Fake looking up css from service registry and returning a list of locations
        List<String> tmpCSS = new ArrayList<String>();
        for( String plugin : getActiveUIPlugins() ) {
            tmpCSS.add(plugin + "/style.css");
        }
        css = tmpCSS;
        // probably send UPDATED_CSS_EVENT
        log.info("CSS Bundles updated: " + css.toString());
    }

    private String read(String file){
        String text = "";

        URL url = Resources.getResource(file);
        try {
            text = Resources.toString(url, Charsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return text;

    }

    private String getJSContents(String url) {
        String content = read(url);
        return content;
    }

    private void updateJSBundles() {

        // TODO: Perhaps wrap the bundles with try / catch with useful error to see what didnt load
        // load the start fragment for the bundle closure
        String bundle = getJSContents("static/fragments/start.frag");
        String preBundleFrag = getJSContents("static/fragments/preBundle.frag");
        String postBundleFrag = getJSContents("static/fragments/postBundle.frag");

        // for each plugin get bundle contents and add it
        for( String plugin : getActiveUIPlugins() ) {
            bundle += preBundleFrag + getJSContents("static/"+plugin+"/bundle.js") + postBundleFrag;
        }

        // tail with the end fragment
        bundle += getJSContents("static/fragments/end.frag");

        // update the cache
        js = bundle;
        log.info("JS Mega bundle updated: " + bundle.toString());
    }

    @Override
    @PostConstruct
    public void updateResources() {
        updateCSSImports();
        updateJSBundles();
        log.info("JS and CSS RESOURCES UPDATED");
    }

    @Override
    public List<String> getCSSImports() {
        return css;
    }

    @Override
    public String getJSBundle() {
        return js;
    }

}
