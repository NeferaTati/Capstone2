package service;

import com.MindinStudios.Backend.Model.FormSubmission;
import com.MindinStudios.Backend.Model.PaintingsC;
import com.MindinStudios.Backend.common.FormSubmissionRepo;
import com.MindinStudios.Backend.common.Paintings;
import com.MindinStudios.Backend.common.PaintingsRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Service
    public static class PaintingsService {

        private final PaintingsRepo paintingsRepo;

        public PaintingsService(PaintingsRepo paintingsRepo) {
            this.paintingsRepo = paintingsRepo;
        }

        // Count the number of paintings
        public long count() {
            return paintingsRepo.count();
        }

        // Save all paintings
        public void saveAll(List<Paintings> paintings) {
            List<PaintingsC> entities = paintings.stream()
                    .map(p -> new PaintingsC(p.id(), p.title(), p.materials(), p.image_url()))
                    .collect(Collectors.toList());
            paintingsRepo.saveAll(entities);
        }

        // Find all paintings
        public List<Paintings> findAll() {
            List<Paintings> entities = paintingsRepo.findAll();
            return entities.stream()
                    .map(p -> new Paintings(p.getId(), p.getTitle(), p.getMaterials(), p.getImage_url()))
                    .collect(Collectors.toList());
        }

        // Create a new painting
        public Paintings create(Paintings painting) {
            PaintingsC entity = new PaintingsC(null, painting.title(), painting.materials(), painting.image_url());
            PaintingsC savedEntity = paintingsRepo.save(entity);
            return new Paintings(savedEntity.getId(), savedEntity.getTitle(), savedEntity.getMaterials(), savedEntity.getImage_url());
        }

        // Update an existing painting
        public Paintings update(Paintings painting, Integer id) {
            PaintingsC entity = new PaintingsC(id, painting.title(), painting.materials(), painting.image_url());
            PaintingsC updatedEntity = paintingsRepo.save(entity);
            return new Paintings(updatedEntity.getId(), updatedEntity.getTitle(), updatedEntity.getMaterials(), updatedEntity.getImage_url());
        }

        // Delete a painting by ID
        public void deleteById(Integer id) {
            paintingsRepo.DeleteById(id);
        }
    }
}