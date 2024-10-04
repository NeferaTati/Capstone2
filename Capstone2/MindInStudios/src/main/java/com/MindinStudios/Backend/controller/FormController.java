package com.MindinStudios.Backend.controller;

import com.MindinStudios.Backend.Model.FormSubmission;
import com.MindinStudios.Backend.service.FormSubmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/form")
public class FormController {

    private final FormSubmissionService formSubmissionService;

    public FormController(FormSubmissionService formSubmissionService) {
        this.formSubmissionService = formSubmissionService;
    }

    @PostMapping("/submit")
    public ResponseEntity<FormSubmission> submitForm(@RequestBody FormSubmission submission) {
        FormSubmission savedSubmission = formSubmissionService.saveSubmission(submission);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSubmission);
    }

    @GetMapping("/submissions")
    public ResponseEntity<List<FormSubmission>> getAllSubmissions() {
        List<FormSubmission> submissions = formSubmissionService.getAllSubmissions();
        return ResponseEntity.ok(submissions);
    }

    @GetMapping("/submissions/{id}")
    public ResponseEntity<Object> getSubmissionById(@PathVariable Long id) {
        return formSubmissionService.getSubmissionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/submissions/{id}")
    public ResponseEntity<Void> deleteSubmission(@PathVariable Long id) {
        if (formSubmissionService.deleteSubmission(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
    }
}