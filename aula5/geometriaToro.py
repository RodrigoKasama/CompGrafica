import math
import array


def mapP5(valor, a, b, c, d):
    return (valor-a)/(b-a)*(d-c)+c


def toro(raio, dx,  n=50, m=50):
    vertex = array.array('f')
    for i in range(m):
        theta = mapP5(i, 0, m, 0, 2 * math.pi)
        for j in range(n):
            phi = mapP5(j, 0, n, 0, 2 * math.pi)
            # 				r2
            Qx = (raio * math.cos(theta) + dx) * math.cos(phi)
            Qy = raio * math.sin(theta)
            Qz = (raio * math.cos(theta) + dx )* math.sin(phi)
            
            vertex.append(Qx)
            vertex.append(Qy)
            vertex.append(Qz)
    return vertex
