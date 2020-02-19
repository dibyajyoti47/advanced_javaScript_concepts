const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return "boom";
    }
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime
    };
}

const ohno = makeNuclearButton();
// ohno.launch();  //error can not access 
ohno.totalPeaceTime();