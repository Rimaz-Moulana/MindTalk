package com.mindtalk.Backend.dto.entertainment;

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
    private String content;
    private int status;

    public int getStatus() {
        return status=0;
    }

}
