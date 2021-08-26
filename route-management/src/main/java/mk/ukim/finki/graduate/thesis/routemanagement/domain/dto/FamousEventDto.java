package mk.ukim.finki.graduate.thesis.routemanagement.domain.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class FamousEventDto {
    @NotBlank(message = "Events title must not be blank")
    private String title;
    @NotBlank(message = "Events description must not be blank")
    private String description;
    @NotBlank(message = "Events start date must not be blank")
    private String start;
    @NotBlank(message = "Events end date must not be blank")
    private String end;
    private String picture;
    @NotBlank(message = "Events location must not be blank")
    private String location;
}
