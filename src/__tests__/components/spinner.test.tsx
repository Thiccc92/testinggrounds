import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsTCUz khJLZs"
      >
        <svg
          class="sc-bdfBwQ cuuOmQ sc-dlfnbm mabrO"
          color="text"
          id="ea8wrxrf1xjv1"
          viewBox="0 0 513.7 513.7"
          width="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="ea8wrxrf1xjv2"
          >
            <g
              id="ea8wrxrf1xjv3"
            >
              <g
                id="ea8wrxrf1xjv4"
              >
                <g
                  id="ea8wrxrf1xjv5"
                >
                  <path
                    d="M330.088000,501.932000L183.678000,501.932000C150.230000,501.932000,122.688000,479.288000,121.134000,450.509000L112.013000,338.105000L402.515000,338.105000L392.622000,450.717000C390.942000,479.410000,363.443000,501.932000,330.088000,501.932000Z"
                    fill="rgb(255,255,255)"
                    id="ea8wrxrf1xjv6"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M343.707000,338.105000L335.817000,427.921000C334.478000,450.805000,312.546000,468.768000,285.943000,468.768000L169.170000,468.768000C142.500000,468.768000,120.539000,450.717000,119.288000,427.774000C118.221000,467.886000,135.775000,500.677000,183.679000,501.932000C183.677000,501.932000,330.088000,501.932000,330.088000,501.932000C363.443000,501.932000,390.942000,479.410000,392.621000,450.718000C392.621000,450.718000,402.514000,338.106000,402.514000,338.106000L343.707000,338.106000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv7"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M389.607000,196.483000C367.995000,252.921000,295.289000,223.075000,319.568000,167.729000C330.599000,140.858000,368.866000,123.508000,377.233000,126.943000C385.601000,130.378000,400.639000,169.611000,389.607000,196.483000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv8"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M127.457000,194.817000C148.844000,250.666000,220.792000,221.131000,196.765000,166.363000C185.849000,139.773000,147.982000,122.603000,139.701000,126.002000C131.421000,129.401000,116.540000,168.225000,127.457000,194.817000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv9"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M402.846000,347.599000L111.682000,347.599000C33.752000,339.387000,142.490000,162.115000,257.264000,173.788000C372.063000,162.129000,480.764000,339.388000,402.846000,347.599000Z"
                    fill="rgb(83,204,251)"
                    id="ea8wrxrf1xjv10"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M429.164000,321.757000C416.487000,232.751000,333.594000,165.744000,241.721000,174.473000C307.449000,180.881000,360.217000,231.521000,369.864000,296.250000C371.553000,307.585000,361.350000,317.637000,348.082000,317.637000L107.106000,317.637000C98.825000,317.637000,91.738000,313.721000,87.991000,308.021000C81.234000,326.674000,87.196000,347.104000,111.682000,347.598000C111.680000,347.598000,402.845000,347.598000,402.845000,347.598000C418.877000,347.599000,431.205000,335.453000,429.164000,321.757000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv11"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M292.137000,184.490000C295.196000,166.575000,293.740000,149.709000,283.748000,135.079000C287.647000,115.535000,285.747000,99.259000,275.350000,87.603000C275.337000,86.043000,265.827000,-7.392000,254.979000,13.087000C248.840000,34.358000,244.419000,54.394000,244.823000,70.968000C236.845000,82.663000,233.974000,95.567000,237.954000,110.123000C230.943000,122.179000,227.853000,135.609000,230.774000,151.050000C221.526000,163.314000,223.558000,176.778000,223.990000,183.041000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv12"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M292.137000,184.490000C294.219000,171.685000,294.343000,159.242000,290.219000,147.966000C297.046000,180.278000,227.989000,178.237000,228.829000,153.920000C221.839000,165.358000,223.592000,177.264000,223.991000,183.042000C226.724000,204.338000,289.323000,204.596000,292.137000,184.490000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv13"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M203.017000,313.806000C197.918000,318.905000,189.650000,318.905000,184.551000,313.806000L160.630000,289.885000C155.531000,284.786000,155.531000,276.518000,160.630000,271.419000C165.729000,266.320000,173.997000,266.320000,179.096000,271.419000L203.017000,295.340000C208.116000,300.439000,208.116000,308.706000,203.017000,313.806000Z"
                    fill="rgb(255,255,255)"
                    id="ea8wrxrf1xjv14"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M236.402000,286.138000C232.482000,280.085000,234.211000,272,240.263000,268.080000L268.657000,249.690000C274.710000,245.770000,282.795000,247.499000,286.715000,253.551000C290.635000,259.604000,288.906000,267.689000,282.854000,271.609000L254.459000,289.999000C248.407000,293.920000,240.322000,292.191000,236.402000,286.138000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv15"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M336.115000,308.762000C329.312000,306.069000,326.480000,297.481000,329.264000,291.606000C329.673000,290.678000,342.549000,260.594000,342.708000,260.257000C345.639000,253.813000,353.199000,250.864000,359.737000,253.667000C366.540000,256.360000,369.372000,264.948000,366.588000,270.823000C366.179000,271.751000,353.303000,301.835000,353.144000,302.172000C350.213000,308.616000,342.654000,311.565000,336.115000,308.762000Z"
                    fill="rgb(255,255,255)"
                    id="ea8wrxrf1xjv16"
                    stroke="none"
                    stroke-width="1"
                  />
                </g>
                <g
                  id="ea8wrxrf1xjv17"
                >
                  <g
                    id="ea8wrxrf1xjv18"
                  >
                    <path
                      d="M439.122000,320.273000C433.390000,281.811000,415.462000,246.171000,388.196000,218.509000C392.415000,213.387000,396.054000,207.291000,398.921000,200.307000C408.793000,174.422000,402.514000,131.584000,381.058000,117.628000C353.724000,112.428000,316.096000,142.087000,307.780000,170.819000C306.403000,170.426000,305.023000,170.037000,303.637000,169.676000C303.808000,156.178000,300.700000,143.916000,294.341000,133.053000C297.691000,112.601000,294.604000,96.023000,285.146000,83.674000C283.415000,62.214000,279.103000,38.341000,271.983000,10.823000C270.626000,4.516000,265.061000,-0.005000,258.564000,0C252.129000,0.004000,246.618000,4.446000,245.201000,10.657000C238.116000,35.272000,234.840000,53.178000,234.735000,68.028000C226.880000,80.795000,224.392000,94.442000,227.285000,108.685000C220.786000,121.363000,218.418000,134.785000,220.222000,148.691000C215.930000,155.720000,214.248000,162.822000,213.686000,168.960000C212.043000,169.360000,210.408000,169.789000,208.778000,170.234000C200.988000,141.435000,163.204000,111.456000,135.877000,116.686000C109.910000,133.799000,105.842000,191.826000,128.485000,216.353000C100.155000,243.090000,39.977000,340.390000,103.429000,356.834000C103.429000,356.834000,111.086000,451.193000,111.086000,451.193000C116.124000,542.152000,272.687000,504.798000,330.088000,512.003000C419.524000,511.211000,402.558000,415.701000,410.972000,356.856000C427.961000,353.841000,442.048000,337.601000,439.122000,320.273000ZM328.882000,171.553000C337.272000,152.547000,359.329000,139.886000,373.235000,136.682000C380.886000,148.773000,387.671000,173.202000,380.293000,192.659000C378.340000,197.416000,375.974000,201.526000,373.297000,204.953000C359.165000,193.450000,343.488000,184.211000,326.828000,177.409000C327.389000,175.487000,328.069000,173.534000,328.882000,171.553000ZM254.870000,71.454000C254.665000,61.885000,256.102000,51.188000,258.338000,40.678000C261.095000,53.772000,263.076000,65.908000,264.317000,77.274000L254.866000,71.628000C254.870000,71.571000,254.868000,71.512000,254.870000,71.454000ZM249.684000,82.606000C268.875000,93,277.585000,99.044000,275.114000,125.136000L247.953000,109.028000C245.501000,99.730000,245.478000,90.995000,249.684000,82.606000ZM243.869000,120.654000L274.377000,138.747000C280.803000,148.842000,284.461000,159.474000,283.382000,172.840000L240.735000,149.599000C238.770000,139.468000,239.753000,129.895000,243.869000,120.654000ZM236.417000,161.004000L280.231000,184.881000C275.321000,190.231000,238.486000,191.347000,234.001000,181.883000C233.556000,175.879000,232.629000,168.818000,236.417000,161.004000ZM135.570000,156.596000C137.869000,146.204000,141.587000,138.654000,143.705000,135.754000C159.746000,138.401000,187.149000,159.217000,189.663000,176.613000C173.201000,183.116000,157.677000,191.996000,143.609000,203.064000C133.617000,189.937000,131.529000,175.417000,135.570000,156.596000ZM183.678000,491.864000C155.402000,491.856000,132.300000,473.344000,131.169000,449.695000C131.169000,449.695000,123.701000,357.667000,123.701000,357.667000L202.205000,357.667000L208.083000,491.863000L183.678000,491.863000ZM297.080000,491.864000L220.177000,491.864000L214.299000,357.668000L302.958000,357.668000ZM382.592000,449.837000C380.230000,484.611000,342.231000,495.101000,309.173000,491.864000L315.051000,357.668000L390.689000,357.668000ZM416.516000,331.789000C413.417000,335.385000,408.306000,337.531000,402.845000,337.531000L111.681000,337.531000C106.220000,337.531000,101.109000,335.385000,98.010000,331.789000C92.375000,265.666000,155.307000,205.601000,215.324000,189.404000C222.330000,215.008000,294.100000,216.150000,301.098000,189.924000C360.169000,206.652000,422.235000,266.388000,416.516000,331.789000Z"
                      fill="rgb(0,0,0)"
                      id="ea8wrxrf1xjv19"
                      stroke="none"
                      stroke-width="1"
                    />
                    <path
                      d="M193.783000,323.662000C181.998000,325.420000,164.310000,300.339000,156.356000,294.156000C152.750000,290.548000,150.763000,285.752000,150.763000,280.651000C150.175000,264.167000,172.124000,255.066000,183.367000,267.147000C194.162000,280.042000,225.866000,298.792000,207.288000,318.077000C203.565000,321.800000,198.674000,323.662000,193.783000,323.662000ZM203.017000,313.806000L203.027000,313.806000ZM169.863000,273.638000C163.870000,273.392000,160.432000,281.487000,164.902000,285.613000C164.902000,285.613000,188.823000,309.534000,188.823000,309.534000C195.162000,316.049000,205.277000,305.963000,198.746000,299.610000C195.559000,297.503000,174.160000,272.176000,169.863000,273.638000Z"
                      fill="rgb(0,0,0)"
                      id="ea8wrxrf1xjv20"
                      stroke="none"
                      stroke-width="1"
                    />
                    <path
                      d="M247.392000,298.133000C241.126000,298.134000,234.984000,295.061000,231.331000,289.422000L231.332000,289.422000C217.070000,266.925000,252.267000,254.792000,265.374000,244.619000C286.350000,231.135000,307.058000,262.986000,286.137000,276.680000C278.997000,280.180000,255.798000,299.369000,247.392000,298.133000ZM275.742000,253.630000C274.117000,252.097000,245.466000,272.369000,243.547000,273.150000C240.339000,275.134000,239.356000,279.731000,241.471000,282.854000L241.472000,282.854000C243.576000,286.102000,247.928000,287.032000,251.175000,284.929000L279.570000,266.539000C285.407000,263.008000,282.533000,253.412000,275.742000,253.630000Z"
                      fill="rgb(0,0,0)"
                      id="ea8wrxrf1xjv21"
                      stroke="none"
                      stroke-width="1"
                    />
                    <path
                      d="M341.234000,315.859000C338.727000,315.859000,336.181000,315.362000,333.734000,314.314000C324.216000,310.463000,319.465000,298.587000,323.707000,289.234000C328.971000,280.354000,335.701000,250.952000,347.500000,247.935000C362.588000,241.272000,379.189000,258.269000,372.144000,273.195000C365.487000,284.934000,359.734000,317.542000,341.234000,315.859000ZM338.496000,303.210000C341.933000,304.767000,346.294000,303.024000,347.709000,299.526000C347.709000,299.526000,361.040000,268.434000,361.040000,268.434000C362.598000,264.999000,360.854000,260.634000,357.356000,259.220000C353.920000,257.663000,349.557000,259.406000,348.142000,262.904000C348.142000,262.904000,334.811000,293.996000,334.811000,293.996000C333.287000,297.552000,334.940000,301.685000,338.496000,303.210000Z"
                      fill="rgb(0,0,0)"
                      id="ea8wrxrf1xjv22"
                      stroke="none"
                      stroke-width="1"
                    />
                  </g>
                  <path
                    d="M145.003000,259.609000C117.254000,252.783000,154.660000,224.300000,164.389000,218.470000C175.658000,211.878000,185.777000,229.720000,174.308000,235.994000C168.156000,239.476000,158.062000,248.771000,153.131000,255.495000C151.158000,258.184000,148.102000,259.609000,145.003000,259.609000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv23"
                    stroke="none"
                    stroke-width="1"
                  />
                  <path
                    d="M191.707000,224.046000C176.623000,222.604000,179.682000,203.449000,193.951000,202.933000C211.777000,201.971000,209.442000,224.216000,191.707000,224.046000Z"
                    fill="rgb(255,101,132)"
                    id="ea8wrxrf1xjv24"
                    stroke="none"
                    stroke-width="1"
                  />
                </g>
              </g>
              <path
                d="M61.132000,43.616000C62.216000,45.200000,69.438000,70.528000,71.816000,70.237000C104.053000,84.342000,104.165000,83.204000,71.816000,97.339000C69.496000,97.004000,62.132000,122.468000,61.131000,123.959000C59.909000,127.398000,55.585000,127.398000,54.362000,123.959000L45.707000,99.623000C44.306000,93.801000,10.473000,89.041000,22.055000,79.978000C23.674000,78.694000,46.065000,70.545000,45.707000,67.952000C45.707000,67.952000,54.362000,43.615000,54.362000,43.615000C55.585000,40.178000,59.909000,40.178000,61.132000,43.616000Z"
                fill="rgb(255,255,255)"
                id="ea8wrxrf1xjv25"
                stroke="none"
                stroke-width="1"
              />
              <path
                d="M468.201000,106.809000C469.006000,107.984000,474.362000,126.772000,476.127000,126.556000C499.991000,136.950000,500.075000,136.244000,476.127000,146.660000C474.405000,146.412000,468.944000,165.300000,468.201000,166.407000C467.294000,168.958000,464.087000,168.958000,463.180000,166.407000C463.180000,166.407000,456.760000,148.355000,456.760000,148.355000C455.684000,143.983000,430.683000,140.591000,439.215000,133.782000C440.417000,132.829000,457.025000,126.785000,456.760000,124.861000C456.760000,124.861000,463.180000,106.809000,463.180000,106.809000C464.086000,104.259000,467.294000,104.259000,468.201000,106.809000Z"
                fill="rgb(255,255,255)"
                id="ea8wrxrf1xjv26"
                stroke="none"
                stroke-width="1"
              />
              <g
                id="ea8wrxrf1xjv27"
              >
                <path
                  d="M175.242000,67.050000C175.396000,77.627000,158.782000,77.627000,158.938000,67.049000C158.783000,56.472000,175.398000,56.472000,175.242000,67.050000Z"
                  fill="rgb(255,101,132)"
                  id="ea8wrxrf1xjv28"
                  stroke="none"
                  stroke-width="1"
                />
                <path
                  d="M390.760000,52.927000C390.676000,71.619000,362.255000,71.617000,362.174000,52.926000C362.258000,34.235000,390.679000,34.237000,390.760000,52.927000Z"
                  fill="rgb(255,101,132)"
                  id="ea8wrxrf1xjv29"
                  stroke="none"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </svg>
        <svg
          class="sc-bdfBwQ cuuOmQ sc-hKgILt jsGrON"
          color="text"
          viewBox="0 0 256 256"
          width="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z"
            fill="#464649"
            fill-rule="evenodd"
          />
          <path
            d="M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z"
            fill="#606063"
          />
          <path
            d="M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z"
            fill="#464649"
          />
          <path
            clip-rule="evenodd"
            d="M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z"
            fill="#464649"
            fill-rule="evenodd"
          />
          <path
            d="M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z"
            fill="#606063"
          />
          <path
            d="M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z"
            fill="#464649"
          />
          <path
            clip-rule="evenodd"
            d="M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z"
            fill="#464649"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z"
            fill="#979797"
            fill-rule="evenodd"
          />
          <path
            d="M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z"
            fill="#464649"
          />
          <path
            clip-rule="evenodd"
            d="M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z"
            fill="#737373"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z"
            fill="#606063"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </DocumentFragment>
  `);
});