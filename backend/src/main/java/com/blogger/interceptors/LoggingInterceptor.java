package com.blogger.interceptors;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Date;

@Component
public class LoggingInterceptor implements HandlerInterceptor {

    @SuppressWarnings("null")
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        long startTime = System.currentTimeMillis();
        request.setAttribute("startTime", startTime);
        System.out.println("\u001B[32m" + new Date() + ": [START] " + request.getMethod() + " " + request.getRequestURI() + "\u001B[0m");
        return true;
    }

    @SuppressWarnings("null")
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        long startTime = (Long) request.getAttribute("startTime");
        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime;
        System.out.println("\u001B[31m" + new Date() + ": [END] " + request.getMethod() + " " + request.getRequestURI() + " - Duration: " + duration + "ms\u001B[0m");
    }
}
