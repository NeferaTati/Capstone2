package com.MindinStudios.Backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import jakarta.annotation.PreDestroy;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Configuration
public class DatabaseCleanUP {

    @Autowired
    private DataSource dataSource;

    @Bean
    public DatabaseCleaner databaseCleaner() {
        return new DatabaseCleaner(dataSource);
    }

    public static class DatabaseCleaner {

        private final DataSource dataSource;

        public DatabaseCleaner(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        @PreDestroy
        public void cleanUp() {
            try (Connection connection = dataSource.getConnection()) {
                // Execute TRUNCATE statements for the specified tables
                connection.createStatement().execute("TRUNCATE TABLE paintings");
                connection.createStatement().execute("TRUNCATE TABLE digital_media_and_videos");
                connection.createStatement().execute("TRUNCATE TABLE photography");
                System.out.println("Database cleaned up.");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}