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

    public List<String> getActiveUIPlugins(){
        // Fake using Eureka to lookup UI contributing plugins that are currently active
        return Arrays.asList(
            "plugin1",
            "plugin2",
            "plugin3"
        );
    }

    @Override
    public void updateCSSImports() {
        // Fake looking up css from service registry and returning a list of locations
        List<String> tmpCSS = new ArrayList<String>();
        for( String plugin : getActiveUIPlugins() ) {
            tmpCSS.add(plugin + "/style.css");
        }
        css = tmpCSS;
        // probably send UPDATED_CSS_EVENT
        log.info("CSS Bundles updated: " + css.toString());
    }

    public String read(String file){
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

    @Override
    public void updateJSBundles() {
        /* Fake looking up js bundles from microservices and combining */
        String bundle = "";
        String pluginJS = "";

        for( String plugin : getActiveUIPlugins() ) {
            pluginJS = getJSContents("static/"+plugin+"/bundle.js");
            bundle += "(function(){\n\n" + pluginJS + "\n\n})();\n\n";
        }

        js = bundle;
        log.info("JS Bundle updated: " + js.toString());
    }

    @Override
    @PostConstruct
    public void updateResources() {
        updateCSSImports();
        updateJSBundles();
        log.info("RESOURCES UPDATED");
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
