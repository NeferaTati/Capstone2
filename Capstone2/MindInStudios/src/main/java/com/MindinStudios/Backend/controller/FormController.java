package com.MindinStudios.Backend.Controller;

import com.MindinStudios.Backend.Model.FormSubmission;
import com.MindinStudios.Backend.service.FormSubmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/form") // Base URL for the controller
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
}