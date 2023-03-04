import React from "react";
import { Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="bg-secondary text-center py-4">
        <h3 className="text-white border-danger">Get Our Latest Album</h3>
      </div>
      <div className="w-75 m-auto text-center ">
        <h1 className="text-center">TOURS</h1>
        <Table className="m-auto">
          <thead></thead>
          <tbody>
            <tr className="text-red">
              <td className="m-5">July 16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className="btn btn-primary">BUY TICKETS</button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>July 19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <button className="btn btn-primary">BUY TICKETS</button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>July 22</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <button className="btn btn-primary">BUY TICKETS</button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>July 29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <button className="btn btn-primary">BUY TICKETS</button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Aug 02</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <button className="btn btn-primary">BUY TICKETS</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
