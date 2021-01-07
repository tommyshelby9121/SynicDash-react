import * as React from "react";
import { Container, Row } from "react-bootstrap";

export function Error404() {
    return (
        <div className="error404">
            <Container>
                <Row>
                    <div className="col-sm-4" >
                        <h1>404 Not Found!</h1>
                        <p>We could not find the document that you requested.</p>
                        <a href="/" className="btn btn-primary mt-5">Return Home</a>
                    </div>
                    <div className="col-sm-8">
                        <svg width="792" height="426" viewBox="0 0 792 426" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="window">
                                <path id="Vector" d="M644.137 0.365021H0.274933V412.723H644.137V0.365021Z" fill="#E6E6E6"/>
                                <path id="Vector_2" d="M625.725 52.0849H18.686V388.328H625.725V52.0849Z" fill="white"/>
                                <path id="Vector_3" d="M643.862 0H0V27.3536H643.862V0Z" fill="#34495E"/>
                                <path id="Vector_4" d="M20.327 19.0544C23.127 19.0544 25.3968 16.7846 25.3968 13.9846C25.3968 11.1846 23.127 8.91483 20.327 8.91483C17.527 8.91483 15.2572 11.1846 15.2572 13.9846C15.2572 16.7846 17.527 19.0544 20.327 19.0544Z" fill="white"/>
                                <path id="Vector_5" d="M39.5706 19.0544C42.3706 19.0544 44.6404 16.7846 44.6404 13.9846C44.6404 11.1846 42.3706 8.91483 39.5706 8.91483C36.7706 8.91483 34.5008 11.1846 34.5008 13.9846C34.5008 16.7846 36.7706 19.0544 39.5706 19.0544Z" fill="white"/>
                                <path id="Vector_6" d="M58.8142 19.0544C61.6142 19.0544 63.884 16.7846 63.884 13.9846C63.884 11.1846 61.6142 8.91483 58.8142 8.91483C56.0143 8.91483 53.7444 11.1846 53.7444 13.9846C53.7444 16.7846 56.0143 19.0544 58.8142 19.0544Z" fill="white"/>
                                <path id="Vector_7" d="M229.824 86.9728H73.8438V353.44H229.824V86.9728Z" fill="#E6E6E6"/>
                                <path id="Vector_8" d="M386.733 86.9728H256.75V160.321H386.733V86.9728Z" fill="#5D6D7E"/>
                                <path id="Vector_9" d="M386.733 180.747H256.75V259.666H386.733V180.747Z" fill="#E6E6E6"/>
                                <path id="Vector_10" d="M386.733 280.092H256.75V353.44H386.733V280.092Z" fill="#E6E6E6"/>
                                <path id="Vector_11" d="M570.568 86.9728H414.587V203.098H570.568V86.9728Z" fill="#E6E6E6"/>
                                <path id="Vector_12" d="M570.568 237.315H414.587V353.44H570.568V237.315Z" fill="#5D6D7E"/>
                            </g>
                            <g id="magnifying-glass">
                                <path id="Vector_13" d="M597.58 83.5464C577.576 66.6667 553.097 55.9652 527.122 52.7441C501.147 49.523 474.795 53.9211 451.274 65.4034C427.753 76.8856 408.077 94.9569 394.639 117.418C381.201 139.879 374.581 165.762 375.585 191.917C376.59 218.072 385.174 243.371 400.294 264.736C415.415 286.101 436.419 302.61 460.751 312.256C485.083 321.901 511.694 324.266 537.346 319.063C562.998 313.86 586.584 301.313 605.235 282.949L770.853 422.697C772.102 423.751 773.546 424.549 775.103 425.044C776.66 425.54 778.3 425.725 779.928 425.587C781.556 425.449 783.141 424.992 784.593 424.241C786.044 423.491 787.334 422.462 788.388 421.213C789.441 419.964 790.239 418.52 790.734 416.963C791.23 415.405 791.414 413.766 791.276 412.138C791.138 410.509 790.68 408.924 789.93 407.473C789.179 406.022 788.15 404.732 786.901 403.679L621.283 263.931C640.522 236.318 648.757 202.515 644.372 169.147C639.988 135.779 623.3 105.252 597.58 83.5464V83.5464ZM586.903 250.474C574.001 265.765 556.854 276.886 537.631 282.432C518.408 287.978 497.972 287.699 478.907 281.63C459.843 275.562 443.006 263.976 430.526 248.338C418.046 232.701 410.483 213.713 408.794 193.778C407.105 173.842 411.366 153.853 421.037 136.339C430.709 118.825 445.357 104.572 463.128 95.3824C480.9 86.1929 500.998 82.4798 520.88 84.7126C540.762 86.9454 559.536 95.0238 574.827 107.926C595.331 125.228 608.123 149.966 610.388 176.699C612.652 203.432 604.205 229.97 586.903 250.474V250.474Z" fill="#3F3D56"/>
                                <path id="Vector_14" opacity="0.3" d="M444.355 262.551C424.949 246.174 412.412 223.099 409.232 197.906C406.052 172.714 412.462 147.247 427.19 126.562C425.256 128.51 423.386 130.55 421.58 132.682C413.012 142.834 406.528 154.575 402.498 167.234C398.467 179.893 396.97 193.221 398.091 206.459C399.212 219.696 402.929 232.583 409.031 244.384C415.133 256.185 423.499 266.668 433.652 275.235C443.805 283.802 455.547 290.286 468.206 294.315C480.865 298.345 494.194 299.841 507.431 298.719C520.668 297.597 533.555 293.879 545.355 287.776C557.156 281.674 567.638 273.307 576.205 263.153C578.006 261.018 579.702 258.832 581.294 256.594C563.381 274.592 539.356 285.195 513.987 286.299C488.619 287.402 463.763 278.925 444.355 262.551V262.551Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                </Row>
            </Container>
        </div>
    );
}