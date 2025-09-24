public class TestHealthProfile {
    public static void main(String[] args) {
        HealthProfile patient1 = new HealthProfile("jhon", "Silva", 'M', 22, 5, 1974, 1.79, 103.5);

        showResume(patient1);
    }

    public static void showResume(HealthProfile obj) {
        System.out.printf("""
                Nome: %s %s
                Idade: %d anos
                Gênero: %c
                Altura: %.2f
                Peso: %.2f
                IMC: %.2f
                Frequência Cardiaca Máxima: %d
                Frequência Cardiaca Alvo: %s

                """, obj.name, obj.surName, obj.calcAge(), obj.gender, obj.height, obj.weight, obj.calcBMI(), obj.maxHeartRate(), obj.targetHeartRate());
    }
}
