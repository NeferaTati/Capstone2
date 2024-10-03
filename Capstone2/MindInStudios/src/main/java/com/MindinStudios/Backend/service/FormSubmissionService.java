package com.MindinStudios.Backend.service;

import com.MindinStudios.Backend.Model.FormSubmission;
import com.MindinStudios.Backend.common.FormSubmissionRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormSubmissionService {

    private final FormSubmissionRepo formSubmissionRepo;

    public FormSubmissionService(FormSubmissionRepo formSubmissionRepo) {
        this.formSubmissionRepo = formSubmissionRepo;
    }

    public FormSubmission saveSubmission(FormSubmission submission) {
        return formSubmissionRepo.save(submission);
    }

    public List<FormSubmission> getAllSubmissions() {
        return formSubmissionRepo.findAll();
    }

    public boolean deleteSubmission(Long id) {
        return id != null;
    }

    public Optional<Object> getSubmissionById(Long id) {
        return Optional.of(true);
    }
}