package mk.ukim.finki.graduate.thesis.routemanagement.domain.dto;

import lombok.Data;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class AttractionDto {
    @NotBlank(message = "Tourist Attraction name must not be blank")
    private String name;
    private String latitude;
    private String longitude;
    @NotBlank(message = "Tourist Attraction location must not be blank")
    private String location;
    @Size(max = 5000)
    private String description;
    @Size(max = 5000)
    private String pictures;
    @NotNull
    private AttractionType attractionType;
}
