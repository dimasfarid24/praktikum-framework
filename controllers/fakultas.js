const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

const createFakultas = async (req, res, next) => {
    try {
        const result = await prisma.fakultas.create({
            data : {
                nama_fakultas: req.body.nama_fakultas
            }
        });
        return res.json({
            status: true,
            message: 'Data berhasil ditambahkan kedalam tabel fakultas',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const getFakultas = async (req, res, next) => {
    try {
        const result = await prisma.fakultas.findMany();
        return res.json({
            status: true,
            message: 'Data berhasil di ambil dari tabel fakultas',
            data: result
    });
    } catch (error) {
        next(error);
    }
}

const getFakultasById = async (req, res, next) => {
    try {
        const result = await prisma.fakultas.findFirst({
            where: {
                id_fakultas: parseInt(req.params.id)
            }
        });
        return res.json({
            status: true,
            message: 'Data berhasil di ambil dari tabel fakultas berdasarkan ID',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const updateFakultas = async (req, res, next) => {
    try {
        const result = await prisma.fakultas.update({
            where: {
                id_fakultas: parseInt(req.params.id)
            },
            data: {
                nama_fakultas: req.body.nama_fakultas
            }
        });
        return res.json({
            status: true,
            message: 'Data berhasil di update dari tabel fakultas berdasarkan ID',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const destroyFakultas = async (req, res, next) => {
    try {
        const result = await prisma.fakultas.delete({
            where: {
                id_fakultas: parseInt(req.params.id)
            },
        });
        return res.json({
            status: true,
            message: 'Data berhasil di delete dari tabel fakultas berdasarkan ID',
            data: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createFakultas, getFakultas, getFakultasById, updateFakultas, destroyFakultas
}