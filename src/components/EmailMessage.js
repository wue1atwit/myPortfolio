import React from "react";
import "./EmailMessage.scss";
import { Container, AttachmentItem, QuickReply } from "./index";
import { FaPaperclip } from "react-icons/fa";

const EmailMessage = ({ messageDef, setShowModal }) => {
  let temp = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const customStyle = {
    padding: "0 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    flex: 2,
    overflowY: "scroll",
  };

  return (
    <Container sy={customStyle}>
      <div className="subject">
        [Subject]: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta, eligendi? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Provident repudiandae blanditiis illo. Repudiandae minima
        distinctio dicta nobis, aspernatur tempore nesciunt totam quae et
        deleniti error dolorum labore ullam ea minus?
      </div>
      <div className="message-container">
        <div>
          <div className="message-header">
            <div
              className="placeholder-image"
              onClick={() => setShowModal(true)}
            >
              <p className="E">E</p>
            </div>
            <div className="sender">
              <p className="name">Ethan Wu</p>
              <p className="email">
                To:{" "}
                <a href="#">
                  <span>wp@ethanwu.net</span>
                </a>
              </p>
            </div>
          </div>
          <span className="line"></span>
        </div>

        <div className="message-body">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam cupiditate soluta tenetur omnis, blanditiis accusamus,
            nam, sapiente facilis hic explicabo inventore non magnam quaerat
            eaque delectus quam ducimus natus. Corporis obcaecati suscipit cum,
            ea esse ullam quos quod, odio consequuntur aliquam sunt, quaerat
            quas architecto fuga similique pariatur quam sed totam modi repellat
            doloremque! Accusamus dignissimos perspiciatis enim consectetur.
            Iusto eligendi nulla accusantium earum. Provident, dolore fugit
            corporis aut, dolor impedit dicta totam magnam ex repudiandae
            laborum quis aliquid eum. Doloribus sunt dicta eos in debitis
            explicabo minima officia. Minima dolores nemo cumque, accusamus
            ullam eaque optio nesciunt delectus temporibus deleniti, voluptatum
            a expedita! Deleniti quidem qui nisi sunt illum saepe laudantium
            sequi, adipisci minima facere et, ullam doloremque. Nobis ipsum
            delectus eligendi consectetur velit molestiae minima cupiditate, est
            saepe quis voluptate ab enim a pariatur, porro dignissimos fuga
            autem. Incidunt, obcaecati ad? Ipsam, illum ex. Esse, sequi porro?
            Provident quisquam, tempore dolore voluptatum facilis doloremque
            nisi eligendi enim dolores molestias similique ducimus praesentium!
            Eum sapiente esse id quod fugiat ut assumenda officiis, mollitia
            aliquid rem, dolore, dolor excepturi! Deleniti, culpa expedita,
            perspiciatis eum modi non tenetur recusandae enim libero quam sit
            voluptatibus delectus beatae accusamus accusantium excepturi
            incidunt labore magnam ratione eos illo assumenda consequatur.
            Suscipit, fugiat est. Harum, consequatur molestiae esse, hic et
            laborum distinctio adipisci numquam temporibus possimus quisquam
            quae. Laudantium voluptas rerum minima ducimus repudiandae, laborum
            a sapiente explicabo quis fugit facere, officia porro delectus.
            Rerum beatae, velit quisquam repellat assumenda dolore totam sint
            veritatis! Tempore ab quasi iusto temporibus quidem? Dolorem
            accusamus id dolorum ab consequuntur, velit aut. Libero ipsa cum
            magni maiores voluptas? Magni, esse at incidunt doloremque quibusdam
            quisquam aperiam sit voluptate eius illo officia animi nisi est,
            corrupti nesciunt eveniet obcaecati possimus veritatis. Dignissimos
            voluptatibus quia perferendis culpa voluptatem quod soluta!
          </span>
        </div>

        <div className="attachment-container">
          <div className="attachment-header">
            <FaPaperclip></FaPaperclip>
            <p>
              2 attachment <span>Save all</span>
            </p>
            <span className="line"></span>
          </div>

          <div className="item-list">
            {temp.map((a) => (
              <AttachmentItem
                name={"Resume"}
                size={80}
                type="pdf"
                key={a.id}
              ></AttachmentItem>
            ))}
          </div>
        </div>
      </div>
      <QuickReply></QuickReply>
    </Container>
  );
};

export default EmailMessage;
