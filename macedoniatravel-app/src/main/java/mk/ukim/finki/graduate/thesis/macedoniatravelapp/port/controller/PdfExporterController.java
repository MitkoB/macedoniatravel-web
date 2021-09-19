package mk.ukim.finki.graduate.thesis.macedoniatravelapp.port.controller;

import com.lowagie.text.DocumentException;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.dto.PdfExporter;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;
import mk.ukim.finki.graduate.thesis.routemanagement.service.RouteService;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/route")
@CrossOrigin(origins = "http://localhost:3000")
public class PdfExporterController {
    private final RouteService routeService;

    public PdfExporterController(RouteService routeService) {
        this.routeService = routeService;
    }
    @GetMapping("/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=route.pdf";
        response.setHeader(headerKey, headerValue);

        List<Route> routeList = routeService.findAll();
        PdfExporter exporter = new PdfExporter(routeList);
        exporter.export(response);
    }
}
