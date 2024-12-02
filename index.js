const students = [
    { name: "Ana", note: 8 },
    { name: "João", note: 5 },
    { name: "Maria", note: 7 },
    { name: "Pedro", note: 4 },
    { name: "Clara", note: 9 },
    { name: "Lucas", note: 6 },
    { name: "Fernanda", note: 10 },
    { name: "Rafael", note: 3 },
    { name: "Bianca", note: 8 },
    { name: "Carlos", note: 5 },
    { name: "Juliana", note: 6 },
];

function filterApprovedStudents(studentArray) {
    return studentArray.filter(student => student.note >= 6);
}

function formatStudentList(studentList) {
    return studentList.map(student => `${student.name} (Nota: ${student.note})`).join("\n");
}

const approvedStudents = filterApprovedStudents(students);

console.log(`Os Alunos aprovados são: ${formatStudentList(approvedStudents)}`);
