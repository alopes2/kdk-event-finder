import { Link } from "react-router-dom";

export function DatenschutzPage() {
  return (
    <section className="legal-page" aria-labelledby="datenschutz-title">
      <h1 id="datenschutz-title">Datenschutzerklärung</h1>

      <h2>Verantwortlicher</h2>
      <p>Verantwortlich für diese Website ist: Andre Lopes, andrevitorlopes@gmail.com.</p>

      <h2>Umami Privacy Policy</h2>
      <p>
        Für die Webanalyse verwenden wir Umami Cloud. Die Datenschutzhinweise für diesen Dienst gelten direkt gemäß der offiziellen
        Umami Privacy Policy unter{" "}
        <a href="https://umami.is/privacy" target="_blank" rel="noreferrer">
          umami.is/privacy
        </a>
        .
      </p>

      <h2>Lokale Datenspeicherung</h2>
      <p>
        Veranstaltungen, die Sie als Favoriten markieren, werden ausschließlich lokal in Ihrem Browser (localStorage) gespeichert.
        Diese Daten verlassen Ihr Gerät nicht und werden nicht an den Server übertragen.
      </p>

      <h2>Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Unser berechtigtes Interesse
        liegt in der statistischen Analyse und Verbesserung dieser Website.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen die Verarbeitung
        gemäß Art. 21 DSGVO im Rahmen der gesetzlichen Vorgaben.
      </p>

      <h2>Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde für Berlin ist:
        Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin. Website:{" "}
        <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noreferrer">
          datenschutz-berlin.de
        </a>
        .
      </p>

      <p>
        <Link to="/">Zurück zur Startseite</Link>
      </p>
    </section>
  );
}
