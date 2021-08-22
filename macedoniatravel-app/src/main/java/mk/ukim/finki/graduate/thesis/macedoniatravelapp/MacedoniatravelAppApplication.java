package mk.ukim.finki.graduate.thesis.macedoniatravelapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication(scanBasePackages = "mk.ukim.finki.graduate.thesis")
@EnableJpaRepositories(basePackages = "mk.ukim.finki.graduate.thesis")
@EntityScan(basePackages = "mk.ukim.finki.graduate.thesis")
public class MacedoniatravelAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(MacedoniatravelAppApplication.class, args);
    }
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

}
