package aula_0408.cursos;

import java.util.ArrayList;
import java.util.List;

public class EstudoComposicao {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno("Thais", "21389213");
        Aluno aluno2 = new Aluno("Gustavo", "6456543");
        Aluno aluno3 = new Aluno("João", "543234");
        List<Aluno> alunos = new ArrayList<>();
        alunos.add(aluno1);
        alunos.add(aluno2);
        alunos.add(aluno3);

        Professor professor = new Professor("Gabriel", "938473211");

        Curso curso = new Curso("Java", 100.0, professor, alunos);

        System.out.println(curso.getAlunos().get(2).getNome());

    }
}
