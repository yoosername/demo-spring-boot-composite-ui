package demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import demo.service.UIService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class CompositeUIController {

    Logger log = LoggerFactory.getLogger(CompositeUIController.class);

    @Autowired
    UIService ui;

    @RequestMapping("/bundle.js")
    public void getJSBundle(HttpServletResponse response) {

        try {
            response.getWriter().println(ui.getJSBundle());
            response.flushBuffer();
        } catch (IOException e) {
            log.info("Error writing file to output stream. ");
        }

    }

    @RequestMapping("/*")
    public String getComposite(Model model) {

        // The ui service should have up to date cache of css and js by now
        model.addAttribute("css", ui.getCSSImports());
        model.addAttribute("js", ui.getJSBundle());
        return "main";

    }

}
