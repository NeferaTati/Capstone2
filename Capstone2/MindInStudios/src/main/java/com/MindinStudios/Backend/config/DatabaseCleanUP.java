package com.MindinStudios.Backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.dao.DataAccessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DatabaseCleanUp {

    private static final Logger logger = LoggerFactory.getLogger(DatabaseCleanUp.class);

    private final JdbcTemplate jdbcTemplate;
    private final DataSource dataSource;

    private final List<String> tablesToClean = Arrays.asList(
            "paintings", "digital_media_and_videos", "photos"
    );

    @Autowired
    public DatabaseCleanUp(JdbcTemplate jdbcTemplate, DataSource dataSource) {
        this.jdbcTemplate = jdbcTemplate;
        this.dataSource = dataSource;
    }

    @EventListener(ContextRefreshedEvent.class)
    public void cleanUp() {
        logger.info("Starting database cleanup...");
        try (Connection connection = dataSource.getConnection()) {
            DatabaseMetaData metaData = connection.getMetaData();
            for (String tableName : tablesToClean) {
                if (tableExists(metaData, tableName)) {
                    truncateTable(tableName);
                } else {
                    logger.warn("Table '{}' does not exist. Skipping cleanup.", tableName);
                }
            }
        } catch (SQLException e) {
            logger.error("Error during database cleanup", e);
        }
        logger.info("Database cleanup completed.");
    }

    private boolean tableExists(DatabaseMetaData metaData, String tableName) throws SQLException {
        try (ResultSet rs = metaData.getTables(null, null, tableName, new String[] {"TABLE"})) {
            if (rs.next()) {
                return true;
            }
        }
        // If not found, try with lowercase
        try (ResultSet rs = metaData.getTables(null, null, tableName.toLowerCase(), new String[] {"TABLE"})) {
            return rs.next();
        }
    }

    private void truncateTable(String tableName) {
        try {
            jdbcTemplate.execute("TRUNCATE TABLE `" + tableName + "`");
            logger.info("Table '{}' truncated successfully.", tableName);
        } catch (DataAccessException e) {
            logger.warn("Error truncating table '{}': {}", tableName, e.getMessage());
        }
    }
}