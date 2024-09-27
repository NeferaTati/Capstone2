package com.MindinStudios.Backend.common;

import com.MindinStudios.Backend.Model.FormSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormSubmissionRepo extends JpaRepository<FormSubmission, Integer> {
    // Additional query methods can be defined here if needed
}
