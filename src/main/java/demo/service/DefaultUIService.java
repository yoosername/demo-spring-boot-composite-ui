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
            "dashboard",
            "dashboard-plugin"
        );
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

        // TODO: The main webapp is a standard html5 using a single bundle.js
        // TODO: bundle.js is served from a special ResourcePath: /bundle.js
        // TODO: when bundle.js is requested the cached optmised bundle is returned
        // TODO: when something changes in a plugin ( e.g. because of a file watcher or because of eureka changes)
        // TODO:    - the modified plugin bundle is reread and the define statements are plucked out of it into memory.
        // TODO: All cached plugin defines are wrapped in closures & try catch so they dont break anything else. then combined into a single bundle.js
        // TODO: the change is sent to all clients via websockets to force the new bundle to be downloaded
        // TODO: in theory the new js can be loaded over the old one and react will simply compare the diff without much hassle.
        // TODO: the single dahboard bundle itself is wrapped such that if in AMD environment it can be required as a module.

        String bundle = getJSContents("static/fragments/start.frag");
        String preBundleFrag = getJSContents("static/fragments/preBundle.frag");
        String postBundleFrag = getJSContents("static/fragments/postBundle.frag");

        // for each plugin get bundle contents and add it
        for( String plugin : getActiveUIPlugins() ) {
            bundle += preBundleFrag + getJSContents("static/plugins/"+plugin+"/bundle.js") + postBundleFrag;
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
        updateJSBundles();
        log.info("JS and CSS RESOURCES UPDATED");
    }

    @Override
    public String getJSBundle() {
        return js;
    }

}
