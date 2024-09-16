package com.spring.trial.trial;


import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
public class TrialApplication {
	private static Logger logger = LoggerFactory.getLogger(TrialApplication.class);


	public static void main(String[] args)
	{
		//logger.info("hi im tati");
		//logger.error("hi im not them");
		SpringApplication.run(TrialApplication.class, args);
	}
	@Bean
	CommandLineRunner runner ( ){

		return args->{
			Monster  fur = new Monster( 1,"fur");
			Monster sully = new Monster(3, "sully");
			ArrayList <object> list = new ArrayList<object>();
			list.add("Fur");
			list.add("sully");
			logger.info("hi im tati", sully);
			logger.error("hi im not them", fur);
		};

	}


}
