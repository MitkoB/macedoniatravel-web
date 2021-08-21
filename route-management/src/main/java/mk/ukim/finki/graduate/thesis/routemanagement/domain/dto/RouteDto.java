package mk.ukim.finki.graduate.thesis.routemanagement.domain.dto;

import lombok.Data;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.RouteStatus;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class RouteDto {
    @NotBlank(message = "Route name must not be blank")
    private String name;
    private String description;
    @NotBlank(message = "Route start date must not be blank")
    private LocalDateTime startDate;
    @NotBlank(message = "Route end date must not be blank")
    private LocalDateTime endDate;
    private String pictures;
    @NotNull
    private RouteStatus routeStatus;
    @Valid
    private List<Attraction> touristAttractions;
    @NotBlank(message = "User email must not be blank")
    private String email;
    private String price;
}
