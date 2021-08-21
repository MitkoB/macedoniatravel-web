package mk.ukim.finki.graduate.thesis.routemanagement.domain.dto;

import lombok.Data;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class AttractionDto {
    @NotBlank(message = "Tourist Attraction name must not be blank")
    private String name;
    private String latitude;
    private String longitude;
    @NotBlank(message = "Tourist Attraction location must not be blank")
    private String location;
    private String description;
    private String pictures;
    @NotNull
    private AttractionType attractionType;
}
