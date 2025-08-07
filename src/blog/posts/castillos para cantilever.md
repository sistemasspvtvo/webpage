---
layout: post.njk
title: "Refuerzo estructural Coyoacán: Solución para un cantilever en riesgo"
date: 2025-07-10
author: Angel Monroy Canales
tags:
  - Ingeniería, vigas, NTC-2023, CDMX, Refuerzo estructural CDMX, Reparación de grietas en mampostería,	Normas NTC-2023 para casas, Cantilever peligroso solución

excerpt: "¿Tu casa tiene grietas verticales? Así resolvimos un peligroso voladizo en una semana. Error común en autoconstrucción: Cómo corregimos un cantilever mal apoyado en CDMX"
image: castillos-para-cantilever-1.webp
---

En la alcaldía de Coyoacán, CDMX, donde la autoconstrucción es una realidad cotidiana, un caso emblemático puso en evidencia los riesgos ocultos tras errores de diseño en estructuras de mampostería confinada. Una propietaria alerta notó que la puerta de su habitación en voladizo (cantilever) ya no cerraba correctamente, acompañado por la aparición de grietas verticales en la esquina de dos muros de mampostería encontrados a 90 grados. Lo que parecía un problema cosmético era, en realidad, una falla crítica en la construcción de dos muros contiguos con junta fría acompañada con una deflexión mayor a la permitida que amenazaba con un colapso progresivo. <br>
Este artículo detalla el proceso integral de diagnóstico, análisis normativo (NTC-2023), diseño de refuerzo y ejecución que permitió resolver el problema en solo una semana, con un costo 40% menor frente a alternativas convencionales. A través del: <br>
- Análisis numérico con fórmulas clave como: <br><br>

$_\text{mR} = F_R\left( 0.5 v_m^ {\ast} A_T + 0.3 P \right)\leq 1.5 F_R v_m^{\ast} A_T$

<br><br>

- Estrategias de refuerzo mínimamente invasivas (continuidad de castillos, zapatas aisladas). <br><br>

Demostramos cómo la correcta aplicación de la normativa, combinada con soluciones prácticas, puede salvar vidas y patrimonios. ¿Grietas diagonales o puertas descuadradas? Este caso es tu advertencia.<br><br>

---

## Planteamiento de Solución: Estrategia de Refuerzo para Cantilever en Mampostería

### Diagnóstico Inicial

Durante la inspección del cantilever de mampostería, se identificó una falla estructural asociada a la falta de continuidad vertical de los castillos laterales, los cuales no llegaban hasta la cimentación. Las grietas verticales en la junta fría, típicas de esfuerzos cortantes excesivos, y la inclinación de la puerta, clara señal de desplazamientos diferenciales, confirmaban que el sistema actual no era capaz de resistir adecuadamente los momentos inducidos por la configuración en voladizo.

Dado el tipo de suelo (Tipo II) y la geometría existente, se propuso una solución directa: integrar dos castillos nuevos desde la cadena superior hasta la cimentación, asegurando una transmisión continua de cargas verticales. Esta estrategia no requería cimentaciones sobredimensionadas, permite que el patio siga manteniendo los claros adecuados para seguir funcionando como estacionamiento y se apoyaba en experiencias previas con construcciones similares en zonas de autoconstrucción, como Coyoacán, donde comúnmente se omiten elementos fundamentales debido al escaso conocimiento de la mano de obra que a la vez es el proyectista.

### Comportamiento Estructural y Patologías

La frontera entre muros mostró grietas verticales acompañadas de una deformación de 12 mm en un vano de 3 metros, excediendo el límite de flecha permitido para elementos de concreto:

$$
\delta = 12 \, \text{mm} > \frac{L}{480} = \frac{3000}{480} \approx 6.25 \, \text{mm}
$$

Además, una puerta visiblemente descuadrada evidenciaba desplazamientos verticales significativos. Este comportamiento se atribuyó a una configuración estructural deficiente, en contravención con lo indicado por la sección 6.2.1.1.a de las NTC-2023, que establece la obligación de colocar castillos en los extremos y encuentros de muros.

### Análisis de Causas Probables

Las grietas a 90° detectadas entre muros colindantes que desplanten sobre un cantilever pueden explicarse por varios factores combinados. La losa, al estar parcialmente apoyada sobre muros de mampostería, sufre flexión y deflexión bajo carga, generando asentamientos diferenciales. Este efecto se agrava si los muros se construyeron en momentos distintos, ya que la diferencia de rigidez entre ellos y la falta de una junta de separación inducen esfuerzos incompatibles.

La ausencia de una junta de construcción provoca una interacción rígida entre los muros, amplificando tensiones en la frontera. Adicionalmente, la discontinuidad del apoyo genera una concentración de esfuerzos en la interfaz, mientras que la falta de un sistema de confinamiento (castillos, dalas, vigas de borde) agrava la respuesta estructural.

También debe considerarse la contracción diferencial de los materiales. Cuando uno de los muros se construye después, el mortero fresco puede retraerse más, generando tensiones internas que abren fisuras, lo cual recalca la importancia de controlar las deformaciones volumétricas en mampostería.

### Observaciones y Recomendación

Las grietas verticales observadas se deben principalmente a asentamientos diferenciales por apoyo parcial, falta de juntas entre etapas constructivas, concentración de esfuerzos por rigidez discontinua y contracción no controlada de materiales. La solución estructural debe enfocarse en mejorar la continuidad vertical, reforzar la unión entre muros, insertar juntas de construcción apropiadas y revisar el diseño del voladizo conforme a lo establecido en las NTC-2023.<br><br>


<p class="maybe-vertical">
  <img src="/img/blog/castillos-para-cantilever-2.webp" alt="Frontera entre muros" />
</p><br><br>

---
## Análisis Estructural del Estado Actual

### Análisis de Muro

#### Compresión

**Cálculo de la Resistencia a Compresión de un Muro de Mampostería Confinada**<br><br>

Para calcular la resistencia a compresión de diseño ($P_R$) del muro de mampostería confinada con los datos proporcionados, seguimos el procedimiento establecido en la normativa:

<br>

**Datos Proporcionados**

- Tipo de muro: Confinado (castillos y dalas)
- Pieza: Tabique macizo de arcilla
- Mortero: Tipo II ($f_j' \geq 7.5\ \mathrm{MPa}$)
- Dimensiones:
  - Espesor ($t$) = 12 cm
  - Longitud ($L$) = 3 m = 300 cm

<br>

**Determinación de $f'_m$ (Resistencia a compresión de la mampostería)**

Para **tabique macizo de arcilla** con **mortero Tipo II**, según Tabla 2.8.1.4.2:

- Si no se especifica $f_p'$, se toma el valor mínimo:

$$
f'_m = 4\ \mathrm{MPa} = 40\ \mathrm{kg/cm}^2
$$


**Área bruta del muro ($A_T$)**

$$
A_T = t \cdot L = 12\ \mathrm{cm} \cdot 300\ \mathrm{cm} = 3\,600\ \mathrm{cm}^2
$$

<br><br>

**Factor de reducción por excentricidad y esbeltez ($F_R$)**<br><br>

- Para muros **confinados**, según **Sección 4.1.5**:

$$
F_R = 0.6
$$

- Revisión de esbeltez:

$$
\frac{H}{t} \leq 25 \quad \Rightarrow \quad H \leq 25 \cdot 12 = 300\ \mathrm{cm} = 3\ \mathrm{m}
$$

No se aplica reducción adicional si se cumple esta condición.<br><br>


**Resistencia a compresión de diseño ($P_R$)**

Ecuación general según Sección 4.1.4:

$$
P_R = F_R \cdot (f'_m \cdot A_T)
$$

Sustituyendo:

$$
P_R = 0.6 \cdot (40 \cdot 3\,600) = 86\,400\ \mathrm{kg}
$$

<br><br>

**Verificación de la Carga Actuante**


Para calcular el peso tributario que actúa sobre una **dala de 3 metros** que soporta **dos losas de concreto reforzado** y un **muro de tabique**, seguimos la siguiente metodología para la carga de las losas de concreto reforzado (azotea):

- *Espesor de losa ($e$):*
  $$e = 0.12\ \mathrm{m}$$

- *Peso volumétrico del concreto reforzado ($\gamma$):*
  $$\gamma = 2\,400\ \mathrm{kg/m}^3$$

- *Ancho tributario por losa (mitad de la longitud de la dala):*
  $$\frac{3\ \mathrm{m}}{2} = 1.5\ \mathrm{m}$$

*Carga por metro lineal de dala (por losa):*

$$
w_{losa} = e \cdot \gamma \cdot \text{ancho tributario} = 0.12 \cdot 2\,400 \cdot 1.5 = 432\ \mathrm{kg/m}
$$

*Total para dos losas:*

$$
w_{losas} = 2 \cdot 432 = 864\ \mathrm{kg/m}
$$

*Carga del Muro de Tabique Recocido* <br><br>

- *Altura del muro ($h$):*
  $$h = 2.8\ \mathrm{m}$$

- *Peso volumétrico del tabique ($\gamma_{tabique}$):*
  $$\gamma_{tabique} = 1\,500\ \mathrm{kg/m}^3$$

- *Espesor típico del muro ($e$):*
  $$e = 0.12\ \mathrm{m}$$

*Carga por metro lineal de dala:*
$$
w_{muro} = h \cdot \gamma_{tabique} \cdot e = 2.8 \cdot 1\,500 \cdot 0.12 = 504\ \mathrm{kg/m}
$$
<br>
Según la **NTC-2023**, la carga viva mínima para **azoteas accesibles** es:

$$
w_{viva} = 100\ \mathrm{kg/m}^2 \cdot 3\ \mathrm{m} = 300\ \mathrm{kg/m}
$$

Se considera el ancho tributario total de 3 m, ya que la carga viva actúa sobre ambas losas simultáneamente.

<br>

Resumen de Cargas Tributarias:

| Concepto            | Carga (kg/m) |
|---------------------|--------------|
| Peso de dos losas   | 864          |
| Peso del muro       | 504          |
| Cargas adicionales (impermeabilización, acabados) | 32 |
| Carga viva (azotea) | 300          |
| **Total**           | **1700**   |

Peso Total Tributario para la Dala de 3 m

$$
W_{total} = 1\,700\ \mathrm{kg/m} \cdot 3\ \mathrm{m} = 5\,100\ \mathrm{kg}
$$

La **dala de 3 metros** soporta un **peso tributario total de 5100 kg**, distribuido como:

- **1400 kg/m** de carga muerta (**losa + muro**)
- **300 kg/m** de carga viva (azotea)

<br>

*Comparación:*

$$
P_R = 86400\ \mathrm{kg} \gg 5100\ \mathrm{kg} \quad \text{(Cumple ampliamente)}
$$
<br>

El muro es **estructuralmente seguro** bajo carga axial a compresión. La resistencia a tensión en muros de mampostería se considera nula por defecto (Sección 2.8.4.1). Para un análisis completo se debe considerar:
<br>
- **Cortante sísmico** (Capítulo 10)  
- **Detallado de castillos y dalas** (Sección 6.2)

#### Cortante
<br>

La **resistencia nominal total al cortante** en muros de mampostería es la suma de:

<br>

- Contribución de la mampostería ($V_{mR}$)
- Contribución del refuerzo horizontal ($V_{sR}$), en este caso no existe

<br>

Ecuación general:

$V_R = V_{mR} + V_{sR} \quad \text{(con } F_R = 0.7$ para ambos términos)

<br>

**Contribución de la Mampostería ($V_{mR}$)**<br>

Para **muros confinados** (Sección 6.2.3):

$$
V_{mR} = F_R \left( 0.5 v'_m A_T + 0.3 P \right) \leq 1.5 F_R v'_m A_T
$$

Donde:
<br>
- $F_R = 0.7$: factor de resistencia
- $v'_m$: resistencia a compresión diagonal de diseño (MPa o kg/cm²)
- $A_T = t \cdot L$: área bruta de la sección transversal (incluye castillos)
- $P$: carga axial actuante (solo cargas permanentes y variables instantáneas, sin factor de carga)
<br>
Para **muros reforzados interiormente** (Capítulo 7), la fórmula es similar, pero $A_T$ **no incluye** las áreas de los castillos.
<br>
**Resistencia a compresión diagonal** ($v'_m$):  <br>
  Se obtiene por ensaye (Capítulo 2.8.2) o tablas normativas:
<br>
*Muro confinado de tabique macizo:*
    $$v'_m = 0.2\ \mathrm{MPa} = 2\ \mathrm{kg/cm}^2$$

*Factor de resistencia*:  
  $$F_R = 0.7$$

**Datos:**
<br>

*Dimensiones:*
  $$t = 12\ \mathrm{cm},\quad L = 3\ \mathrm{m} = 300\ \mathrm{cm}$$

*Carga axial:*
  $$P = 5100\ \mathrm{kg}$$


**Cálculos:**
<br>
*Área bruta:*

$$
A_T = 12 \cdot 300 = 3\,600\ \mathrm{cm}^2
$$

Contribución de la mampostería y resistencia total:
<br>
$$
V_{mR} = V_{R} = 0.7 \left( 0.5 \cdot 2 \cdot 3\,600 + 0.3 \cdot 5100 \right) = 3591 \ \mathrm{kg}
$$
<br>

$$
1.5 F_R v'_m A_T = 1.5 \cdot 0.7 \cdot 2\cdot 3600 = 7560 \mathrm{kg}
$$

$$
3591 < 7560
$$

El muro es **estructuralmente seguro** bajo cortante. Al igual que en el caso de carga axial, se deberá de corroborar la seguridad con un análisis sísmico exhaustivo. Para fines de dar una propuesta inicial de reforzamiento, se emplearon los siguientes cálculos:

<br>

**Ubicación**
Coyoacán, CDMX (Zona Sísmica III, $Q = 1.5$).

<br>

**Fuerza sísmica estimada:**

$$
V_u = \frac{Q \cdot W}{R} = \frac{1.5 \cdot 5100 \, \text{kg}}{2} = 3825 \, \text{kg}
$$

**Conclusión:**<br><br>

$V_u = 3825 \, \text{kg} > V_{mR} = 3591 \, \text{kg} \Rightarrow$Se requeriría refuerzo horizontal. Por lo tanto, se deberá de revisar la carga cortante que incide sobre este elemento en el modelo análitico bajo cargas sísmicas.

### Análisis de Losa

#### Cargas Actuantes

$$
\begin{aligned}
CM &= 0.70\ \text{ton/m}^2 \\
CV &= 0.17\ \text{ton/m}^2 \\
W_u &= 1.2CM + 1.6CV = 1.11\ \text{ton/m}^2
\end{aligned}
$$

#### Esfuerzos Críticos

Para el voladizo de 3 m:<br><br>

**Momento de Volteo**:

$$
M_u = W_u \cdot \frac{L^2}{2} = 1.11 \cdot \frac{3^2}{2} = 5.0\ \mathrm{ton \cdot m}
$$

**Cortante Actuante**:

$$
V_u = W_u \cdot L = 1.11 \cdot 3 = 3.33\ \text{ton}
$$

#### Verificación de Seguridad

**Modelación del Comportamiento Estructural**

El análisis se realizó considerando el voladizo como un sistema de mampostería confinada no lineal, donde:

$$
K_{global} = K_{mamposteria} + K_{confinamiento}
$$

**Hipótesis de Cálculo**

- Comportamiento elástico y frágil para mampostería
- No linealidad geométrica por efectos P-Δ (Apéndice B)  
- Módulo de elasticidad reducido:

$$
E_m = 600 f'_m = 600 \cdot 40 = 24\,000\ \text{kg/cm}^2
$$


### Verificación de Deformaciones

**Elementos analizados**

- Losa de concreto armado en voladizo (3 m de luz) que conformaba el entrepiso del cantilever

- Muro de mampostería que conforma un pretil de un metro de alto y que descansa sobre el voladizo (12 cm de espesor, $f'_m = 40\ \text{kg/cm}^2$).
<br>

#### Cálculo de Deflexión en Viga en Cantilever con Carga Uniforme y Puntual

Para calcular la deflexión (flecha) de una viga en cantilever sometida a una carga uniformemente distribuida (UDL) y una carga puntual en su extremo, se utiliza el método de superposición. Esto implica sumar las deflexiones producidas por cada tipo de carga por separado.
<br>
**Deflexión por carga uniformemente distribuida (UDL)**

Sea una carga distribuida $w$, la deflexión máxima en el extremo libre de la viga se calcula como:

$$
\delta_w = \frac{wL^4}{8EI}
$$

Donde:

- $ L $ es la longitud de la viga  
- $ E $ es el módulo de elasticidad del material
- $ I $ es el momento de inercia de la sección transversal
<br>
**Deflexión por carga puntual en el extremo**

Sea una carga puntual $P$ aplicada en el extremo libre de la viga, la deflexión máxima es:

$$
\delta_P = \frac{PL^3}{3EI}
$$

**Superposición: Deflexión Total**

La deflexión total en el extremo libre es la suma de ambas contribuciones:

$$
\delta_{\text{total}} = \delta_w + \delta_P = \frac{wL^4}{8EI} + \frac{PL^3}{3EI}
$$

Calculando con los siguientes valores:

- $ w = 5.55 \text{kg/cm:  }$ Mitad de la carga distribuida calculada anteriormente  
- $ P = 0.1 \cdot f'_c \cdot A_g = 0.1 \cdot 250 \cdot 10 \cdot 15 = 3750 \text{kg} $  : Bajada de carga esperada del castillo ubicado al extremo del voladizo  
- $ L = 300 \ \text{cm: } $  Longitud en voladizo
- $ E = 14000\sqrt{f'_c}  = 221340  \mathrm{kg/cm^2} $  
- $ I = b \cdot h^3 / 12 = 14 400 \text{cm}^4 $ Para un ancho unitario 

<br>

**Deflexión por carga distribuida:**

$$
\delta_w = \frac{5.55 \cdot 300^4}{8 \cdot 221340 \cdot 14400}  = 1.76 \text{cm}
$$

**Deflexión por carga puntual:**

$$
\delta_P = \frac{3750 \cdot 300^3}{3 \cdot 221340 \cdot 14400 }= 10.58 \, \text{cm}
$$

**Deflexión total:**

$$
\delta_{\text{total}} =  12.34 \, \text{cm}
$$

<br>
El número anterior es una idealización, existen otros factores que contribuyen a la resistencia de la deflexión, tales como el propio muro de mampostería sobre ambos sentidos del voladizo, el hecho de que el castillo no descarga con una fuerza equivalente al valor de su capacidad de resistencia axial pura  y también se está empleando la inercia bruta de la sección. Sin embargo, con este parámetro nos podemos dar cuenta que la deflexión esperada está definida en gran parte por la carga puntual.

<br><br>

Para calcular la deflexión total de **dos vigas rígidamente acopladas en voladizo** bajo una carga uniformemente distribuida y una carga puntual al extremo, seguimos los pasos descritos a continuación.

<br><br>

- Viga 1 (concreto):
  $$
  E_1 = 221{,}340\ \text{kg/cm}^2,\quad I_1 = 14{,}400\ \text{cm}^4
  $$

- Viga 2 (mampostería):
  $$
  E_2 = 24{,}000\ \text{kg/cm}^2,\quad I_2 = 1{,}000\ \text{cm}^4
  $$


**Rigidez Equivalente de la Sección Compuesta**

Transformamos la sección al material de referencia $E_1$:

$$
n = \frac{E_2}{E_1} = \frac{24{,}000}{221{,}340} \approx 0.1084
$$

Momento de inercia equivalente:

$$
I_{\text{eq}} = I_1 + n \cdot I_2 = 14{,}400 + 0.1084 \cdot 1{,}000 = 14{,}508.4\ \text{cm}^4
$$

Rigidez equivalente:

$$
EI_{\text{eq}} = E_1 \cdot I_{\text{eq}} = 221{,}340 \cdot 14{,}508.4 \approx 3.212 \times 10^9\ \text{kg} \cdot \text{cm}^2
$$

**Deflexión por Carga Distribuida**

$$
\delta_w = \frac{w L^4}{8 E I_{\text{eq}}}
$$

Sustituyendo:

$$
\delta_w = \frac{5.55 \cdot 300^4}{8 \cdot 3.212 \times 10^9}
= \frac{5.55 \cdot 8.1 \times 10^9}{2.5696 \times 10^{10}} \approx 1.749\ \text{cm}
$$

**Deflexión por Carga Puntual**

$$
\delta_P = \frac{P L^3}{3 E I_{\text{eq}}}
$$

Sustituyendo:

$$
\delta_P = \frac{3750 \cdot 300^3}{3 \cdot 3.212 \times 10^9}
= \frac{3750 \cdot 2.7 \times 10^7}{9.636 \times 10^9} \approx 10.51\ \text{cm}
$$

**Deflexión Total**

$$
\delta_{\text{total}} = \delta_w + \delta_P = 1.749 + 10.51 \approx 12.26\ \text{cm}
$$

<br>

La **deflexión máxima** en el extremo libre del sistema de vigas acopladas es ligeramente menor que la calculada solo para la losa.


#### Deflexiones en condiciones de servicio según NTC-2023 Concreto


**13.4.1.1** Las dimensiones de elementos de concreto deberán ser tales que las deflexiones que puedan sufrir bajo condiciones de servicio o trabajo no excedan los siguientes límites a) y b), considerando deflexiones a largo plazo:

- a) Si al flexionarse un elemento no se dañan otros elementos estructurales:

<br>

$$ \Delta_{\text{limite}} = 5\ \text{mm} + \frac{L}{240} $$

<br>

**13.4.2.1** La deflexión total será la suma de:

- La inmediata, calculada según 13.4.3
- Más la diferida, determinada de acuerdo con 13.4.4

<br>

**Deflexiones inmediatas**

**13.4.3.1** Las deflexiones que ocurren inmediatamente después de aplicar la carga en elementos no presforzados se calcularán con los métodos o fórmulas usuales para determinar deflexiones elásticas.

**13.4.3.3** El momento de agrietamiento se calculará con:

$$
M_{\text{ag}} = \frac{f_r I_g}{h^2}
\quad \text{(13.4.3.3)}
$$

<br>

**13.4.3.4** Puede emplearse $I_{ag}$ como simplificación.

<br>

**Deflexiones diferidas**

**13.4.4.1** Para elementos Clase 1:

$$
\lambda_\Delta = \frac{\xi}{1 + 50 p'}
\quad \text{(13.4.4.1)}
$$

Donde $p'$ es la cuantía de acero a compresión en la zona central o empotramiento, y $\xi$ depende del tiempo:

| Duración (meses) | $$\xi$$ |
|------------------|---------|
| 3                | 1.0     |
| 6                | 1.2     |
| 12               | 1.4     |
| 60+              | 2.0     |

**13.4.4.2** Para concreto Clase 2, los valores de $\xi$ se multiplican por 2.

<br>

**Cálculo de deflexión inmediata permitida** 

<br>

$$ \Delta_{\text{limite}} = 5\ \text{mm} + \frac{3000}{240} = 1.75 cm < 12.26 cm$$

<br>

### Conclusiones del Diagnóstico

La estructura presentaba **dos fallas críticas**:
1. Discontinuidad en trayectoria de cargas
2. Deflexión de losa por encima de lo permitido. 

<br>

---

## Diseño del Refuerzo y Validación Normativa


Una vez planteada la solución a nivel conceptual y de haber cotejado las suposiciones los cálculos con el modelo analítico, se procedió a verificar su viabilidad mediante la NTC-2023.

### Continuidad Estructural: Nuevos Castillos

- **Dimensiones:** 15×15 cm (consistente con la estructura existente).
- **Acero longitudinal:** 4 varillas #3  
  $$
  A_s = 2.84\,\mathrm{cm^2}
  $$
  Suficiente para resistir el momento generado por el voladizo.
- **Estribos:** Ø#2 @ 15 cm, asegurando un confinamiento adecuado según Sección 5.6.4.

#### Verificación de Momentos (Sección 6.4)

**Momento en Voladizo**

- Carga distribuida $w$: 5 kN/m  
- Longitud del claro entre apoyos (antes voladizo) $L_v$: 3 m

$$
M_u = \frac{w L_v^2}{2} = \frac{5 \cdot 3^2}{8} = 2.5 \, \text{kN}\cdot\text{m}
$$

**Momento Resistente $M_R$**

<br>

- Refuerzo propuesto: 2Ø12 mm en castillos extremos ($A_s = 2.26 \, \text{cm}^2$)  
- Brazo de palanca $d$: 10 cm

$$
M_R = F_R A_s f_y d = 0.8 \cdot 2.26 \cdot 420 \cdot 0.10 = 75.94 \, \text{kN}\cdot\text{m}
$$

### Cimentación: Zapatas Aisladas

En este caso de estudio no se abundará cómo fue calculado la capacidad admisible del suelo y otros parámetros geotécnicos o de los esfuerzos sobre la cimentación (cortante de punzonamiento, entre otros), sin embargo, se mencionará que el valor elegido está en función de lo encontrado en sitio, lo mostrado en fotografías en el proceso constructivo del inmueble y en el hecho de que las casas aledañas descargan a una lecho de piedra basáltica.

<br>

- **Dimensiones:** 0.8 × 0.8 × 0.2 m  
  $$
  f'_c = 250\,\mathrm{kg/cm^2}
  $$
- **Análisis de capacidad:**
  $$
  q_{\mathrm{adm}} = 28\,\mathrm{ton/m^2} \quad (\text{suelo Tipo II}) > q_{\mathrm{act}} = 5.6\,\mathrm{ton/m^2} \quad \text{(seguro)}
  $$

### Nuevas deflexiones para la losa

La deflexión inmediata se calculó ahora con la ecuación para vigas simplemente apoyadas con carga uniforme:

$$
\delta_i = \frac{5 w L^4}{384 E_{ef} I_{ef}}
$$

Donde:

- $w = 0.555\ \text{kg/cm}$ (carga última mayorada)  
- $L = 300\ \text{cm}$  
- $E = 221\,340\ \text{kg/cm}^2$  
- $I_{ef} = 14\,400\ \text{cm}^4$

<br>

No se usó la inercia bruta $I_g$ porque la losa ya presentaba fisuras, reduciendo su rigidez efectiva:

$$
I_{ef} = 0.4 I_g = 0.4 \cdot 14400 = 5760 \text{cm}^4
$$

<br>

La comparación post-refuerzo tras añadir 2 castillos nuevos:

<br>

$$
\delta_{i\ nuevo} = \frac{5 \cdot 0.555 \cdot 300^4}{384 \cdot 221\,340 \cdot 5\,760} = 0.459\ \text{cm} < 1.75\ \text{cm} \quad \text{(Cumple)}
$$

<br>

**Flecha a Largo Plazo:**

$$
\delta_{total} = \delta_i \cdot (1 + \lambda) = 0.459 \cdot 2.0 = 0.918\ \text{cm} \quad \text{(Aceptable)}
$$

### Valor de $\lambda$ en el Cálculo de Deflexión

**Definición:**

$$
\lambda = \xi (1 + 50 \rho')
$$

- $\xi = 2.0$ para >5 años  
- $\rho' = 0$ (sin acero en compresión)

Entonces:

$$
\lambda = 2.0 \cdot (1 + 0) = 2.0
$$

Se usó $\lambda = 1.0$ por:

- La mampostería tiene menor fluencia que el concreto.  
- Ensayos en CDMX indican $\lambda \approx 1.0$ con $f'_m \geq 150\ \text{kg/cm}^2$.

<br>

**Flechas:**

- Instantánea: $\delta_i = 9.2\ \text{mm}$  
- Largo plazo: $\delta_{total} = 18.4\ \text{mm}$  
- Si $\lambda = 2.0$: $\delta_{total} = 27.6\ \text{mm}$

A manera de comparación, en normas internacionales se emplean los siguientes valores de $\lambda$: 

<br>

- ACI 530-23: $\lambda = 1.5$  
- Eurocode 6: $\lambda = 1.0$

<br>

---

## Proceso Constructivo: Minimizando Impactos

La ejecución de obra en sitio se realizó en 3 días, con las siguientes etapas clave:



### 1er día
- Apuntalamiento temporal con gatos mecánicos para descargar la losa antes de demoler los castillos flotantes.
- Demolición controlada de los castillos existentes, exponiendo las varillas para traslape.
- Armado de nuevos castillos con traslapes de 40 cm:  
  $$
  L_d = 0.06 \cdot \frac{f_y}{\sqrt{f'_c}} \cdot d_b
  $$
- Vaciado de concreto con curado húmedo durante 72 horas para evitar fisuras por retracción.



### 2do día
- Descimbre de zapatas de cimentación y castillos
- Reintegración estética con ladrillo rojo, manteniendo la armonía arquitectónica.
- Colado de firme de concreto demolido



### 3er día
- Acabado de firme de concreto y limpieza del sitio

**Resultado:** Una estructura segura que cumple con la norma y no altera la funcionalidad del espacio.



### Soluciones Constructivas

**Castillos Adicionales:**

- 2 castillos de 12×15 cm con 4Ø12 mm y estribos Ø6 mm @ 15 cm (Sección 6.2.3).  
- Anclaje en cimentación con $L_d \geq 40 \, \text{cm}$ (Sección 4.1.16).

<br>

**Reparación de Grietas:**

- Inyectar mortero Tipo I ($f'_m \geq 12.5 \, \text{MPa}$) .

<br>

---

## Responsabilidades legales y figuras técnicas

Según lo estipulado en el Reglamento de Construcción para el Distrito Federal, toda intervención estructural relevante dentro de la CDMX debe estar respaldada por un Director Responsable de Obra (DRO) y, en casos de rehabilitación, por un Corresponsable en Seguridad Estructural. Los artículos 33 y 36 del Reglamento indican que tanto el diseño como la supervisión de obra deben ser realizados por estos profesionales registrados ante el Instituto para la Seguridad de las Construcciones. Por ejemplo: “El refuerzo fue diseñado por el Ing. [Nombre], Corresponsable en Seguridad Estructural Nivel [1/2], registrado en el Instituto para la Seguridad de las Construcciones de la CDMX.” <br><br>

Este tipo de proyectos requiere cumplir con ciertos trámites normativos, como el registro de Manifestación de Construcción Tipo B cuando la intervención afecta la seguridad estructural o supera los 120 m² (Art. 47), así como la obtención de Licencia de Construcción Especial si hay demolición parcial (Art. 57, fracción IV). Es importante mencionar que estos trámites se gestionan a través de la Plataforma Digital de la CDMX (Art. 5 Bis), incluyendo el aviso de terminación de obra.<br><br>

Finalmente, al concluir la intervención, se debe emitir el documento correspondiente para acreditar la seguridad de la edificación: ya sea un Visto Bueno de Seguridad y Operación (para usos no habitacionales) o una Constancia de Seguridad Estructural válida por cinco años, firmada por el Corresponsable (Art. 71 Bis). Además, en el diseño se deben aplicar correctamente las Normas Técnicas Complementarias para Rehabilitación Sísmica (2024), por ejemplo, justificando la resistencia real empleada conforme al Capítulo 10 y el Apéndice A.5. Es fundamental que todo el contenido técnico se presente como parte de un caso resuelto por especialistas, sin inducir a su reproducción sin asesoría profesional (Art. 42).<br><br>


---

## Conclusiones

Este caso de estudio en Coyoacán revela un problema recurrente en la autoconstrucción: la falta de continuidad estructural en voladizos de mampostería puede comprometer gravemente la seguridad. La solución implementada—basada en castillos anclados a cimentación—no solo corrigió el riesgo de colapso, sino que demostró que intervenciones precisas, respaldadas por análisis normativos, son más eficientes que demoliciones totales. La deflexión excesiva de la losa (12 mm, casi el doble de lo permitido) era síntoma de un error de concepción estructural: confiar en voladizos sin soporte adecuado para resistir deflexiones.

<br>

El éxito de esta reparación radicó en entender la física del problema: grietas verticales por cortante, desplomes diferenciales y una carga mal transmitida. La NTC-2023 fue la brújula, pero la clave fue adaptar sus principios a una solución práctica—minimizando costos y tiempo sin sacrificar seguridad. Este caso sirve como advertencia: las grietas en esquinas a 90° nunca son "solo fisuras"; son el grito de auxilio de una estructura al límite. La ingeniería no se trata de aplicar fórmulas, sino de escuchar lo que los muros ya intentaban decirnos.

<br>

<p class="maybe-vertical">
  <img src="/img/blog/castillos-para-cantilever-3.webp" alt="Trabajo finalizado">
</p>
