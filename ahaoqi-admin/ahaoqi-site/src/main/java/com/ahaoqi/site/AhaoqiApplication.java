package com.ahaoqi.site;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.ahaoqi"})
public class AhaoqiApplication {
    public static void main(String[] args) {
        SpringApplication.run(AhaoqiApplication.class, args);
    }
}
