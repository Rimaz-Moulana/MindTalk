package com.mindtalk.Backend.dto.Counsellor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CounsellorDTO {
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private Long licenseNo;
    private String licenseImage;
}
