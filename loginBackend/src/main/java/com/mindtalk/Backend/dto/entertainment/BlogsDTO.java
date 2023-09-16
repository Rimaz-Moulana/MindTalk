package com.mindtalk.Backend.dto.entertainment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
public class BlogsDTO {
    private String title;
    private String category;
    private String article;
    private String coverImg;
}
