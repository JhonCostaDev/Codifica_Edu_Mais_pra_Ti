//package Aulas.aula58-java-estrutura-dados-controle.queueManager;

import java.time.LocalDateTime;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.Scanner;

public class QueueManager {

    enum Tipo { PREFERENCIAL, NORMAL } // Constantes

    static final class Senha {
        final Tipo tipo;
        final String senha;
        final LocalDateTime chegada;
        LocalDateTime atendimento;

        Senha(Tipo tipo, String senha, LocalDateTime chegada) {
            this.tipo = tipo;
            this.senha = senha;
            this.chegada = chegada;
            this.atendimento = LocalDateTime.now();
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Deque<Senha> filaPref = new ArrayDeque<>();
        Deque<Senha> filaNormal = new ArrayDeque<>();
        List<Senha> historico = new ArrayList<>();
        

    }
    
}
