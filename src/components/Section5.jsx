import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
const Section5 = () => {
  return (
    <div className="section5">
      <div className="section5-row1">
        <h2>Testimonials</h2>
        <p>Reprehenderit cillum aliquip mollit pariatur cillum</p>
      </div>
      <div className="section5-row2">
        <div className="section5-row2 card">
          <img src={client1} alt="client 1" />
          <h3>Ajiteru Dolapo</h3>
          <p>Ceo easyretail</p>
          <p>
            ‘’ Reprehenderit cillum aliquip mollit pariatur cillum irure nisi
            veniam cupidatat ut esse dolo re enim excepteur. Amet aute aliqua
            dolore nulla adipisicing velit. Mollit ut vs
          </p>
        </div>
        <div className="section5-row2 card">
          <img src={client2} alt="client 2" />
          <h3>Ajiteru Dolapo</h3>
          <p>Ceo easyretail</p>
          <p>
            ‘’ Reprehenderit cillum aliquip mollit pariatur cillum irure nisi
            veniam cupidatat ut esse dolo re enim excepteur. Amet aute aliqua
            dolore nulla adipisicing velit. Mollit ut vs
          </p>
        </div>
        <div className="section5-row2 card">
          <img src={client3} alt="client 3" />
          <h3>Ajiteru Dolapo</h3>
          <p>Ceo easyretail</p>
          <p>
            ‘’ Reprehenderit cillum aliquip mollit pariatur cillum irure nisi
            veniam cupidatat ut esse dolo re enim excepteur. Amet aute aliqua
            dolore nulla adipisicing velit. Mollit ut vs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
