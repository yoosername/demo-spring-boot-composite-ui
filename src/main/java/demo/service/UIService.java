package demo.service;

import org.springframework.stereotype.Component;

import java.util.List;

public interface UIService {
    public void updateResources();

    public List<String> getCSSImports();
    public String getJSBundle();
}
