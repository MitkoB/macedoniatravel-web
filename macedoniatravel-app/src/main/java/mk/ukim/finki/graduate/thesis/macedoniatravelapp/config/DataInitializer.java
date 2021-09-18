package mk.ukim.finki.graduate.thesis.macedoniatravelapp.config;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.model.FavoriteCart;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.domain.repository.FavoriteCartRepository;
import mk.ukim.finki.graduate.thesis.favoritecartmanagement.service.FavoriteCartService;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.AttractionType;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.enumeration.RouteStatus;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Attraction;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.FamousEvent;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.AttractionRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.FamousEventRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.repository.RouteRepository;
import mk.ukim.finki.graduate.thesis.routemanagement.service.ReviewService;
import mk.ukim.finki.graduate.thesis.usersdata.domain.enumeration.Role;
import mk.ukim.finki.graduate.thesis.usersdata.domain.model.User;
import mk.ukim.finki.graduate.thesis.usersdata.domain.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class DataInitializer {
    private final AttractionRepository touristAttractionRepository;
    private final RouteRepository routeRepository;
    private final ReviewService reviewService;
    private final FavoriteCartRepository favoriteCartRepository;
    private final FavoriteCartService favoriteCartService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final FamousEventRepository famousEventRepository;

    @PostConstruct
    public void initData() {
        User user = new User("admin@admin.com",passwordEncoder.encode("p@ssw0rd123."),"ADMIN","ADMIN",
                "none","071111222", Role.ROLE_ADMIN);
        user.setEnabled(true);
        if(userRepository.findAll().isEmpty()) {
            this.userRepository.save(user);
        }

        Attraction touristAttraction1 = new Attraction("Basnko Spa", "41.3842845", "22.725931",
                "This place is situated in Murtino, Strumica, Macedonia, its geographical coordinates are 41° 23' 2\" North, 22° 44' 37\" East ",
                "Termo mineral spa in Strumica from ancient times and one of the rare preserved Roman monuments of its kind in Europe, with a capacity of over 50 l/sec. It is located about 12 km east of Strumica, at the foot of the Belasica Mountain. Ten rooms have been discovered on an area of 1,000 m, with preserved walls in the height from 2 to 6,7 m. The spa Roman Bath (Therma) had a changing room, sauna, pools with hot and cold water. It probably originates from the 11th century, from the time of the Roman Emperor Caracalla, known for the construction and renewal of baths throughout the Empire."
                , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ntGCbRUpaeiV1xd1zcFvzTGDn4wzJ5O7Tg&usqp=CAU",
                AttractionType.LANDMARK);

        Attraction touristAttraction2 = new Attraction("Belasica", "41.3299981", "22.9324904",
                "Belasica, Strumica,  41°20′N 22°57′E",
                "The mountain range is fault-block mountain about 60 km (37.28 mi) long and 7 to 9 km (4.35 to 5.59 mi) wide and is situated just northeast of Dojran Lake. The highest point is Radomir (Kalabaka) at 2,031 m, with elevation otherwise ranging between 300 and 1900 m above sea level. The borders of all three countries meet at Tumba Peak. The climate in the area shows strong Mediterranean influence.  The area of Belasica became a euroregion in 2003. Two football teams are named after the mountain range, PFC Belasitsa from the nearby Bulgarian town of Petrich and FC Belasica from Strumica in North Macedonia."
                , "https://lh3.googleusercontent.com/p/AF1QipPyuvf173gL8lvq17jj6liwBbpjv6916vknG20A",
                AttractionType.MOUNTAINS);
        if (touristAttractionRepository.findAll().isEmpty()) {
            touristAttractionRepository.saveAll(Arrays.asList(touristAttraction1,touristAttraction2));
        }

        Route route = new Route("Strumica Relaxing Tour",
                "This is your chance to make  two-day tour in STRUMICA. You will be able to visit the most beautiful natural bansko spa and church Holy Fifteen Tiberiopolis Martyrs. After that you wull visit Belasica mountain.",
                   LocalDateTime.now(),LocalDateTime.now(),"https://images.myguide-cdn.com/macedonia/blog/late-nights-in-skopje/large/late-nights-in-skopje-188310.jpg",
                   RouteStatus.AVAILABLE,Arrays.asList(touristAttraction1, touristAttraction2),userRepository.findByEmail("admin@admin.com"), "1000 MKD", 5);
        if (routeRepository.findAll().isEmpty()) {
            routeRepository.save(route);
        }


        FavoriteCart favoriteCart = new FavoriteCart(userRepository.findByEmail(user.getEmail()));
        if (favoriteCartRepository.findAll().isEmpty()) {
            favoriteCartRepository.save(favoriteCart);
            this.favoriteCartService.addRouteToFavoriteCart(userRepository.findByEmail(user.getEmail()).getUsername(),
                    routeRepository.findByName(route.getName()).get().getId());
        }


        if(reviewService.listAllRouteReviews(routeRepository.findByName(route.getName()).get().getId()).isEmpty()) {
            this.reviewService.addReviewForRoute(userRepository.findByEmail(user.getEmail()).getUsername(),
                    routeRepository.findByName(route.getName()).get().getId(),
                    "This route is awesome, I want to create ticket.. Who is going?",5);
        }

        FamousEvent famousEvent = new FamousEvent("Strumica carnival","The Strumica Carnival is a secular traditional custom that has its origins in a pagan cult and in its essence, celebrates fertility and cleansing. The Carnival has turned into an event that in 1994 climbed the international ladder. This Carnival is held every year at the beginning of the Great Lent, before Easter.\n" +
                "\n" +
                "The Strumica Carnival was first mentioned in 1670 by the Turkish writer Evliya Çelebi. " +
                "The opening of the Carnival is marked with a masquerade ball, during which a prince and princess are " +
                "elected. The following night, the main international carnival begins where " +
                "awards for best and most original masks are given."
        ,LocalDateTime.now(), LocalDateTime.of(2021,9,15,20, 0),
                "https://editorial01.shutterstock.com/wm-preview-1500/10149440k/06e4f8bf/strumica-carnival-republic-of-north-macedonia-shutterstock-editorial-10149440k.jpg",
                "Strumica, Macedonia", userRepository.findByEmail(user.getEmail()));
        if (famousEventRepository.findAll().isEmpty()) {
            famousEventRepository.save(famousEvent);
        }

    }
}
