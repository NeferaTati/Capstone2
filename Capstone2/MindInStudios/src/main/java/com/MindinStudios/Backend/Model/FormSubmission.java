package com.MindinStudios.Backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "form_submissions") // Change to your desired table name
public class FormSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String textParagraph;
    private String additionalFiles; // Specify if you need any additional files
    private String photoUrl; // URL or path to the uploaded photo
}
