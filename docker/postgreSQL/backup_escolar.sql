--
-- PostgreSQL database dump
--

\restrict DBahBOU6WkPxqSJYkZLrdRxAnXVaCM0czb9See5I2wVUanEcphqgnxayj7TF1LG

-- Dumped from database version 18.0 (Debian 18.0-1.pgdg13+3)
-- Dumped by pg_dump version 18.0 (Debian 18.0-1.pgdg13+3)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alunos; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.alunos (
    aluno_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    sobrenome character varying(100) NOT NULL,
    data_nascimento date,
    endereco text,
    email character varying(255),
    telefone character varying(20),
    data_cadastro timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.alunos OWNER TO "jhonC";

--
-- Name: alunos_aluno_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.alunos_aluno_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alunos_aluno_id_seq OWNER TO "jhonC";

--
-- Name: alunos_aluno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.alunos_aluno_id_seq OWNED BY public.alunos.aluno_id;


--
-- Name: disciplinas; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.disciplinas (
    disciplina_id integer NOT NULL,
    nome_disciplina character varying(150) NOT NULL,
    carga_horaria_h integer NOT NULL,
    sigla character varying(10)
);


ALTER TABLE public.disciplinas OWNER TO "jhonC";

--
-- Name: disciplinas_disciplina_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.disciplinas_disciplina_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.disciplinas_disciplina_id_seq OWNER TO "jhonC";

--
-- Name: disciplinas_disciplina_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.disciplinas_disciplina_id_seq OWNED BY public.disciplinas.disciplina_id;


--
-- Name: historico_gpa; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.historico_gpa (
    historico_id integer NOT NULL,
    aluno_id integer NOT NULL,
    oferta_id integer NOT NULL,
    ano_letivo integer NOT NULL,
    nota_final_letra character varying(3) NOT NULL,
    nota_final_gpa numeric(2,1) NOT NULL
);


ALTER TABLE public.historico_gpa OWNER TO "jhonC";

--
-- Name: historico_gpa_historico_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.historico_gpa_historico_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.historico_gpa_historico_id_seq OWNER TO "jhonC";

--
-- Name: historico_gpa_historico_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.historico_gpa_historico_id_seq OWNED BY public.historico_gpa.historico_id;


--
-- Name: matriculas; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.matriculas (
    matricula_id integer NOT NULL,
    aluno_id integer NOT NULL,
    oferta_id integer NOT NULL,
    data_matricula date DEFAULT CURRENT_DATE,
    status_matricula character varying(20) NOT NULL
);


ALTER TABLE public.matriculas OWNER TO "jhonC";

--
-- Name: matriculas_matricula_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.matriculas_matricula_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.matriculas_matricula_id_seq OWNER TO "jhonC";

--
-- Name: matriculas_matricula_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.matriculas_matricula_id_seq OWNED BY public.matriculas.matricula_id;


--
-- Name: notas; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.notas (
    nota_id integer NOT NULL,
    matricula_id integer NOT NULL,
    data_avaliacao date NOT NULL,
    descricao_avaliacao character varying(255) NOT NULL,
    nota_percentual numeric(5,2) NOT NULL,
    nota_letra character varying(3),
    valor_gpa numeric(2,1) NOT NULL,
    CONSTRAINT notas_nota_percentual_check CHECK (((nota_percentual >= 0.00) AND (nota_percentual <= 100.00))),
    CONSTRAINT notas_valor_gpa_check CHECK (((valor_gpa >= 0.0) AND (valor_gpa <= 4.0)))
);


ALTER TABLE public.notas OWNER TO "jhonC";

--
-- Name: notas_nota_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.notas_nota_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notas_nota_id_seq OWNER TO "jhonC";

--
-- Name: notas_nota_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.notas_nota_id_seq OWNED BY public.notas.nota_id;


--
-- Name: ofertas_disciplina; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.ofertas_disciplina (
    oferta_id integer NOT NULL,
    disciplina_id integer NOT NULL,
    professor_id integer NOT NULL,
    turma_id integer NOT NULL,
    sala_aula character varying(10)
);


ALTER TABLE public.ofertas_disciplina OWNER TO "jhonC";

--
-- Name: ofertas_disciplina_oferta_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.ofertas_disciplina_oferta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ofertas_disciplina_oferta_id_seq OWNER TO "jhonC";

--
-- Name: ofertas_disciplina_oferta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.ofertas_disciplina_oferta_id_seq OWNED BY public.ofertas_disciplina.oferta_id;


--
-- Name: presenca; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.presenca (
    presenca_id integer NOT NULL,
    matricula_id integer NOT NULL,
    data_aula date NOT NULL,
    hora_aula time without time zone,
    status_presenca character varying(20) NOT NULL,
    CONSTRAINT presenca_status_presenca_check CHECK (((status_presenca)::text = ANY ((ARRAY['Presente'::character varying, 'Ausente'::character varying, 'Atraso'::character varying, 'Justificado'::character varying])::text[])))
);


ALTER TABLE public.presenca OWNER TO "jhonC";

--
-- Name: presenca_presenca_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.presenca_presenca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.presenca_presenca_id_seq OWNER TO "jhonC";

--
-- Name: presenca_presenca_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.presenca_presenca_id_seq OWNED BY public.presenca.presenca_id;


--
-- Name: professores; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.professores (
    professor_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    sobrenome character varying(100) NOT NULL,
    email character varying(255),
    telefone character varying(20),
    data_contratacao date
);


ALTER TABLE public.professores OWNER TO "jhonC";

--
-- Name: professores_professor_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.professores_professor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.professores_professor_id_seq OWNER TO "jhonC";

--
-- Name: professores_professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.professores_professor_id_seq OWNED BY public.professores.professor_id;


--
-- Name: turmas; Type: TABLE; Schema: public; Owner: jhonC
--

CREATE TABLE public.turmas (
    turma_id integer NOT NULL,
    nome_turma character varying(50) NOT NULL,
    ano_letivo integer NOT NULL,
    serie_grau character varying(20) NOT NULL
);


ALTER TABLE public.turmas OWNER TO "jhonC";

--
-- Name: turmas_turma_id_seq; Type: SEQUENCE; Schema: public; Owner: jhonC
--

CREATE SEQUENCE public.turmas_turma_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.turmas_turma_id_seq OWNER TO "jhonC";

--
-- Name: turmas_turma_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jhonC
--

ALTER SEQUENCE public.turmas_turma_id_seq OWNED BY public.turmas.turma_id;


--
-- Name: alunos aluno_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.alunos ALTER COLUMN aluno_id SET DEFAULT nextval('public.alunos_aluno_id_seq'::regclass);


--
-- Name: disciplinas disciplina_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.disciplinas ALTER COLUMN disciplina_id SET DEFAULT nextval('public.disciplinas_disciplina_id_seq'::regclass);


--
-- Name: historico_gpa historico_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.historico_gpa ALTER COLUMN historico_id SET DEFAULT nextval('public.historico_gpa_historico_id_seq'::regclass);


--
-- Name: matriculas matricula_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.matriculas ALTER COLUMN matricula_id SET DEFAULT nextval('public.matriculas_matricula_id_seq'::regclass);


--
-- Name: notas nota_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.notas ALTER COLUMN nota_id SET DEFAULT nextval('public.notas_nota_id_seq'::regclass);


--
-- Name: ofertas_disciplina oferta_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina ALTER COLUMN oferta_id SET DEFAULT nextval('public.ofertas_disciplina_oferta_id_seq'::regclass);


--
-- Name: presenca presenca_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.presenca ALTER COLUMN presenca_id SET DEFAULT nextval('public.presenca_presenca_id_seq'::regclass);


--
-- Name: professores professor_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.professores ALTER COLUMN professor_id SET DEFAULT nextval('public.professores_professor_id_seq'::regclass);


--
-- Name: turmas turma_id; Type: DEFAULT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.turmas ALTER COLUMN turma_id SET DEFAULT nextval('public.turmas_turma_id_seq'::regclass);


--
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.alunos (aluno_id, nome, sobrenome, data_nascimento, endereco, email, telefone, data_cadastro) FROM stdin;
1	João	Silva	2005-08-15	Rua das Flores, 100, Centro	joao.silva@escola.com	99911-2233	2025-10-12 13:29:30.164095+00
2	Maria	Santos	2006-03-22	Av. Principal, 50, Bairro Novo	maria.santos@escola.com	99944-5566	2025-10-12 13:29:30.164095+00
3	Pedro	Almeida	2004-11-01	Travessa da Paz, 7, Vila Velha	pedro.almeida@escola.com	99977-8899	2025-10-12 13:29:30.164095+00
4	Ana	Souza	2005-01-28	Rua dos Eucaliptos, 45, Jardim	ana.souza@escola.com	99900-1122	2025-10-12 13:29:30.164095+00
\.


--
-- Data for Name: disciplinas; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.disciplinas (disciplina_id, nome_disciplina, carga_horaria_h, sigla) FROM stdin;
1	Matemática Avançada	80	MAT
2	História Mundial	60	HIS
3	Programação I	100	PROG1
4	Química Orgânica	80	QUI
\.


--
-- Data for Name: historico_gpa; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.historico_gpa (historico_id, aluno_id, oferta_id, ano_letivo, nota_final_letra, nota_final_gpa) FROM stdin;
1	1	1	2025	B	3.0
2	3	3	2025	A+	4.0
\.


--
-- Data for Name: matriculas; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.matriculas (matricula_id, aluno_id, oferta_id, data_matricula, status_matricula) FROM stdin;
1	1	1	2025-10-12	Ativa
2	1	2	2025-10-12	Ativa
3	2	1	2025-10-12	Ativa
4	3	3	2025-10-12	Ativa
5	3	4	2025-10-12	Ativa
6	4	5	2025-10-12	Ativa
7	2	5	2025-10-12	Ativa
\.


--
-- Data for Name: notas; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.notas (nota_id, matricula_id, data_avaliacao, descricao_avaliacao, nota_percentual, nota_letra, valor_gpa) FROM stdin;
1	1	2025-04-10	Prova 1	92.50	A	4.0
2	1	2025-05-15	Trabalho Grupo	85.00	B	3.0
3	3	2025-04-10	Prova 1	65.50	F	0.0
4	3	2025-05-15	Trabalho Grupo	78.00	C	2.0
5	4	2025-05-01	Projeto Final	98.00	A	4.0
6	6	2025-04-10	Prova 1	82.00	B	3.0
\.


--
-- Data for Name: ofertas_disciplina; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.ofertas_disciplina (oferta_id, disciplina_id, professor_id, turma_id, sala_aula) FROM stdin;
1	1	1	2	S201
2	2	2	2	S105
3	3	3	3	Lab I
4	4	2	3	S202
5	1	1	1	S201
\.


--
-- Data for Name: presenca; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.presenca (presenca_id, matricula_id, data_aula, hora_aula, status_presenca) FROM stdin;
1	1	2025-03-01	08:00:00	Presente
2	1	2025-03-02	08:00:00	Ausente
3	2	2025-03-01	10:00:00	Presente
4	3	2025-03-01	08:00:00	Atraso
5	4	2025-03-03	14:00:00	Presente
6	6	2025-03-04	10:00:00	Presente
\.


--
-- Data for Name: professores; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.professores (professor_id, nome, sobrenome, email, telefone, data_contratacao) FROM stdin;
1	Carlos	Ferreira	carlos.ferreira@escola.com	98811-2233	2018-01-15
2	Luciana	Gomes	luciana.gomes@escola.com	98844-5566	2019-07-20
3	Ricardo	Costa	ricardo.costa@escola.com	98877-8899	2020-03-10
\.


--
-- Data for Name: turmas; Type: TABLE DATA; Schema: public; Owner: jhonC
--

COPY public.turmas (turma_id, nome_turma, ano_letivo, serie_grau) FROM stdin;
1	9A-2025	2025	9th Grade
2	10B-2025	2025	10th Grade
3	10C-2025	2025	10th Grade
\.


--
-- Name: alunos_aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.alunos_aluno_id_seq', 4, true);


--
-- Name: disciplinas_disciplina_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.disciplinas_disciplina_id_seq', 4, true);


--
-- Name: historico_gpa_historico_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.historico_gpa_historico_id_seq', 2, true);


--
-- Name: matriculas_matricula_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.matriculas_matricula_id_seq', 7, true);


--
-- Name: notas_nota_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.notas_nota_id_seq', 6, true);


--
-- Name: ofertas_disciplina_oferta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.ofertas_disciplina_oferta_id_seq', 5, true);


--
-- Name: presenca_presenca_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.presenca_presenca_id_seq', 6, true);


--
-- Name: professores_professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.professores_professor_id_seq', 3, true);


--
-- Name: turmas_turma_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jhonC
--

SELECT pg_catalog.setval('public.turmas_turma_id_seq', 3, true);


--
-- Name: alunos alunos_email_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_email_key UNIQUE (email);


--
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (aluno_id);


--
-- Name: disciplinas disciplinas_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.disciplinas
    ADD CONSTRAINT disciplinas_pkey PRIMARY KEY (disciplina_id);


--
-- Name: disciplinas disciplinas_sigla_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.disciplinas
    ADD CONSTRAINT disciplinas_sigla_key UNIQUE (sigla);


--
-- Name: historico_gpa historico_gpa_aluno_id_oferta_id_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.historico_gpa
    ADD CONSTRAINT historico_gpa_aluno_id_oferta_id_key UNIQUE (aluno_id, oferta_id);


--
-- Name: historico_gpa historico_gpa_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.historico_gpa
    ADD CONSTRAINT historico_gpa_pkey PRIMARY KEY (historico_id);


--
-- Name: matriculas matriculas_aluno_id_oferta_id_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.matriculas
    ADD CONSTRAINT matriculas_aluno_id_oferta_id_key UNIQUE (aluno_id, oferta_id);


--
-- Name: matriculas matriculas_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.matriculas
    ADD CONSTRAINT matriculas_pkey PRIMARY KEY (matricula_id);


--
-- Name: notas notas_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_pkey PRIMARY KEY (nota_id);


--
-- Name: ofertas_disciplina ofertas_disciplina_disciplina_id_turma_id_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina
    ADD CONSTRAINT ofertas_disciplina_disciplina_id_turma_id_key UNIQUE (disciplina_id, turma_id);


--
-- Name: ofertas_disciplina ofertas_disciplina_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina
    ADD CONSTRAINT ofertas_disciplina_pkey PRIMARY KEY (oferta_id);


--
-- Name: presenca presenca_matricula_id_data_aula_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.presenca
    ADD CONSTRAINT presenca_matricula_id_data_aula_key UNIQUE (matricula_id, data_aula);


--
-- Name: presenca presenca_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.presenca
    ADD CONSTRAINT presenca_pkey PRIMARY KEY (presenca_id);


--
-- Name: professores professores_email_key; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.professores
    ADD CONSTRAINT professores_email_key UNIQUE (email);


--
-- Name: professores professores_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.professores
    ADD CONSTRAINT professores_pkey PRIMARY KEY (professor_id);


--
-- Name: turmas turmas_pkey; Type: CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.turmas
    ADD CONSTRAINT turmas_pkey PRIMARY KEY (turma_id);


--
-- Name: historico_gpa historico_gpa_aluno_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.historico_gpa
    ADD CONSTRAINT historico_gpa_aluno_id_fkey FOREIGN KEY (aluno_id) REFERENCES public.alunos(aluno_id);


--
-- Name: historico_gpa historico_gpa_oferta_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.historico_gpa
    ADD CONSTRAINT historico_gpa_oferta_id_fkey FOREIGN KEY (oferta_id) REFERENCES public.ofertas_disciplina(oferta_id);


--
-- Name: matriculas matriculas_aluno_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.matriculas
    ADD CONSTRAINT matriculas_aluno_id_fkey FOREIGN KEY (aluno_id) REFERENCES public.alunos(aluno_id);


--
-- Name: matriculas matriculas_oferta_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.matriculas
    ADD CONSTRAINT matriculas_oferta_id_fkey FOREIGN KEY (oferta_id) REFERENCES public.ofertas_disciplina(oferta_id);


--
-- Name: notas notas_matricula_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_matricula_id_fkey FOREIGN KEY (matricula_id) REFERENCES public.matriculas(matricula_id);


--
-- Name: ofertas_disciplina ofertas_disciplina_disciplina_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina
    ADD CONSTRAINT ofertas_disciplina_disciplina_id_fkey FOREIGN KEY (disciplina_id) REFERENCES public.disciplinas(disciplina_id);


--
-- Name: ofertas_disciplina ofertas_disciplina_professor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina
    ADD CONSTRAINT ofertas_disciplina_professor_id_fkey FOREIGN KEY (professor_id) REFERENCES public.professores(professor_id);


--
-- Name: ofertas_disciplina ofertas_disciplina_turma_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.ofertas_disciplina
    ADD CONSTRAINT ofertas_disciplina_turma_id_fkey FOREIGN KEY (turma_id) REFERENCES public.turmas(turma_id);


--
-- Name: presenca presenca_matricula_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jhonC
--

ALTER TABLE ONLY public.presenca
    ADD CONSTRAINT presenca_matricula_id_fkey FOREIGN KEY (matricula_id) REFERENCES public.matriculas(matricula_id);


--
-- PostgreSQL database dump complete
--

\unrestrict DBahBOU6WkPxqSJYkZLrdRxAnXVaCM0czb9See5I2wVUanEcphqgnxayj7TF1LG

