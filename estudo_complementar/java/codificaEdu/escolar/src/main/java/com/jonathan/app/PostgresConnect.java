package com.jonathan.app;
import java.sql.*;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.SQLException;

public class PostgresConnect {
	public static void main(String[] args) {
		String url = "jdbc:postgresql://localhost:5432/escolar";
		String user = "jhonC";
		String password = "db5417";

		try (Connection conn = DriverManager.getConnection(url, user, password)){
			System.out.println("✅ Coneccted");

			String sql = "select nome, sobrenome from alunos";
			try(
				Statement stmt = conn.createStatement();
				ResultSet rs = stmt.executeQuery(sql)) {
				while (rs.next()) {
					String nome = rs.getString("nome");
					String sobrenome = rs.getString("sobrenome");
					System.out.printf("%s %s\n", nome, sobrenome);
				}
			}
		} catch (SQLException e) {
			System.out.println("❌ Connection failed");
			e.printStackTrace();
		}
	}
}