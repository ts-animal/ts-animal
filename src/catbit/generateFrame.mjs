import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';

const { textSync } = figlet;
const { green } = chalk;

const generateCatbitFrame = (position) => {
    const Catbit = `
     |\\___/|
     / o o \\
    |   Y   |
     \\  -  /
     /'---'.
    |        \\   __
    \\         \\ (_ \\
     | || |    \\  \\ \\
     | || | _.  \\_/ /
     (_|(_|(_______/ mga
`;
const legPosition = position % 4; // Alternating leg movement
const tailPosition = position % 8; // Alternating tail movement
const shiftedCatbit = Catbit
    .split('\n')
    .map((line, index) => {
        switch (index) {
            case 7: // Moving front right leg
                return line.substring(legPosition) + line.substring(0, legPosition);
            case 8: // Moving front left leg
            case 9: // Moving hind right leg
            case 10: // Moving hind left leg
                return line.substring(4 - legPosition) + line.substring(0, 4 - legPosition);
            case 4: // Wagging tail
                return line.substring(tailPosition) + line.substring(0, tailPosition);
            default:
                return line;
        }
    })
    .join('\n');

return shiftedCatbit;

};

const saveFrameToFile = (frame, index) => {
    const fileName = `frame${index + 1}.txt`;
    const filePath = path.join('src/rabbit/frames', fileName);
    fs.writeFileSync(filePath, frame);
};

const main = () => {
    const totalFrames = 40;
    for (let i = 0; i < totalFrames; i++) {
        const frame = generateCatbitFrame(i);
        saveFrameToFile(frame, i);
    }
};

main();
