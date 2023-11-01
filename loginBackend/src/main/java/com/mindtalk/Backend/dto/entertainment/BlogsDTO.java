package com.mindtalk.Backend.dto.entertainment;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BlogsDTO {

    private String title;
    private String category;
    @Column(length = 10000000)
    private String content;
    @Column(name = "cover_image_path")
    private String CoverImagePath;
    private int status;

    public int getStatus() {
        return status=0;
    }

}
