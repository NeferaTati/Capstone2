package com.MindinStudios.Backend.config;

import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.slf4j.Logger;

import javax.sql.DataSource;
import javax.swing.plaf.nimbus.State;
import javax.xml.crypto.Data;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;


@Configuration
public class  DatabaseCleanUp {
    @Autowired
    private DataSource dataSource;

    @Bean
    public DatabaseCleanup databaseCleanup() {
        return new DatabaseCleanup(dataSource);
    }

    public static class DatabaseCleanup {
        private DataSource dataSource;
        private final Logger logger = org.slf4j.LoggerFactory.getLogger(DatabaseCleanup.class);

        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        @PreDestroy
        public void dropDatabaseTable() {
            try (Connection connection = dataSource.getConnection()) {
                Statement statement = connection.createStatement();
                statement.executeUpdate("DROP TABLE IF EXISTS form_submissions");
                statement.executeUpdate("DROP TABLE IF EXISTS paintings");
                statement.executeUpdate("DROP TABLE IF EXISTS photos");
                statement.executeUpdate("DROP TABLE IF EXISTS digital_media_and_videos");
                logger.info("Table dropped successfully");
            } catch (SQLException e) {
                throw new RuntimeException(e);

            }
        }
    }
}