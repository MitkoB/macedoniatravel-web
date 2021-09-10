package mk.ukim.finki.graduate.thesis.routemanagement.domain.dto;

import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import mk.ukim.finki.graduate.thesis.routemanagement.domain.model.Route;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.util.List;


public class PdfExporter {
    private final List<Route> routeList;

    public PdfExporter(List<Route> routeList) {
        this.routeList = routeList;
    }

    private void tableHeader(PdfPTable table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(Color.BLACK);
        cell.setPadding(2);

        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setColor(Color.BLUE);

        cell.setPhrase(new Phrase("Route name", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Start date", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("End date", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Price", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Description", font));
        table.addCell(cell);
    }

    private void tableData(PdfPTable table) {
        for (Route route : routeList) {
            table.addCell(String.valueOf(route.getName()));
            table.addCell(route.getStartDate().toString().split("T")[0]);
            table.addCell(route.getEndDate().toString().split("T")[0]);
            table.addCell(route.getPrice());
            table.addCell(route.getDescription());
        }
    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A3);
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();
        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(14);
        font.setColor(Color.BLUE);
        Paragraph p = new Paragraph("Routes", font);
        p.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(p);
        PdfPTable table = new PdfPTable(5);
        table.setWidthPercentage(100f);
        table.setWidths(new float[]{1.5f, 1.5f, 1.5f, 1.5f, 3.0f});
        table.setSpacingBefore(10);
        tableHeader(table);
        tableData(table);
        document.add(table);
        document.close();
    }
}