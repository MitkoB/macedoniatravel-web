package mk.ukim.finki.graduate.thesis.usersdata.domain.dto;


import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Data
public class UserLoginDto {
    @Email(message = "Please enter valid email address!")
    @NotBlank(message = "Email can not be blank.")
    private String email;
    @NotBlank(message = "Password can not be blank.")
    @Size(min = 7, message = "Password must be at least 7 characters")
    private String password;
}
