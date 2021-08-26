package mk.ukim.finki.graduate.thesis.routemanagement.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "famousEvent")
public class FamousEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 5000)
    private String description;
    private LocalDateTime start;
    @Column(name = "finish")
    private LocalDateTime end;
    private String picture;
    private String location;

    public FamousEvent(String title, String description, LocalDateTime start,
                       LocalDateTime end,String picture, String location) {
        super();
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.picture=picture;
        this.location=location;
    }

}
