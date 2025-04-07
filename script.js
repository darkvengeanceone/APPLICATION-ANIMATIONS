let originalPositions = {};  

function toggleSize(event) {
    let box = event.currentTarget;  
    let boxId = box.classList[0];   

    if (!box.classList.contains("expanded")) {
        
        originalPositions[boxId] = {
            left: box.style.left,
            top: box.style.top,
            position: box.style.position
        };

        box.classList.add("expanded");

        document.body.addEventListener("click", closeBox);
    }

    event.stopPropagation(); 
}

function closeBox(event) {
    document.querySelectorAll(".expanded").forEach((box) => {
        let boxId = box.classList[0]; 

        if (!box.contains(event.target)) {
            box.classList.remove("expanded");
           
            if (originalPositions[boxId]) {
                box.style.left = originalPositions[boxId].left;
                box.style.top = originalPositions[boxId].top;
                box.style.position = originalPositions[boxId].position;
            }
        }
    });

    document.body.removeEventListener("click", closeBox);
}

document.querySelectorAll(".box, .kutubir").forEach((box) => {
    box.addEventListener("click", toggleSize);
});
