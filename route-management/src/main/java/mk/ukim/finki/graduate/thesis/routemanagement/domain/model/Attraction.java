package mk.ukim.finki.graduate.thesis.routemanagement.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "attraction")
public class Attraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String latitude;
    private String longitude;
    private String location;
    @Column(length = 5000)
    private String description;
    private String pictures;
    @Enumerated(value = EnumType.STRING)
    private AttractionType attractionType;

    public Attraction(String name, String latitude, String longitude, String location, String description,
                      String pictures, AttractionType attractionType) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.location = location;
        this.description = description;
        this.pictures = pictures;
        this.attractionType = attractionType;
    }
}
