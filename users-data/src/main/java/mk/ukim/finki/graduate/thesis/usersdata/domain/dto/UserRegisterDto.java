package mk.ukim.finki.graduate.thesis.usersdata.domain.dto;

import com.sun.istack.NotNull;
import lombok.Data;
import mk.ukim.finki.graduate.thesis.usersdata.domain.enumeration.Role;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserRegisterDto {
    @NotBlank(message = "Email can not be blank")
    @Email
    private String email;
    @NotBlank(message = "Password can not be blank")
    @Size(min = 7, message = "Password must be at least 7 characters")
    private String password;
    @NotBlank(message = "Repeat password can not be blank")
    private String repeatPassword;
    private String firstName;
    private String lastName;
    private String address;
    @NotBlank(message = "Number can not be blank")
    private String contactNumber;
    @NotNull
    private Role role;
}
