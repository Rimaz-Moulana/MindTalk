package com.mindtalk.Backend.entity.entertainment;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "blogs")
public class BlogsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String category;
    @Column(length = 10000000)
    private String content;
    @Column(name = "cover_image_path")
    private String CoverImagePath;
    @Column(columnDefinition = "INT DEFAULT 0")
    private int status;
}
