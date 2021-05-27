import axios from "axios";

const baseUrl = "https://localhost:5001/api/"

export default {
    
    admin(urlAdmin = baseUrl + 'admin/'){
        return {
            fetchAdmin : () => axios.get(urlAdmin),
            fetchAdminById : idAdmin => axios.get(urlAdmin + idAdmin),
            createAdmin : newAdmin => axios.post(urlAdmin, newAdmin),
            updateAdmin : (idAdmin ,updateAdmin) => axios.put(urlAdmin + idAdmin ,updateAdmin),
            deleteAdmin : idAdmin => axios.delete(urlAdmin + idAdmin)
        }
    },
    
    candidate(urlCandidate = baseUrl + 'candidate/'){
        return {
            fetchCandidate : () => axios.get(urlCandidate),
            fetchCandidateById : idCandidate => axios.get(urlCandidate + idCandidate),
            createCandidate : newCandidate => axios.post(urlCandidate, newCandidate),
            updateCandidate : (idCandidate, updateCandidate) => axios.put(urlCandidate + idCandidate, updateCandidate),
            deletecandidate : idCandidate => axios.delete(urlCandidate + idCandidate)
        }
    },

    party(urlParty = baseUrl + 'party/'){
        return {
            fetchParty : () => axios.get(urlParty),
            fetchPartyById : idParty => axios.get(urlParty + idParty),
            createParty : newParty => axios.post(urlParty, newParty),
            updateParty : (idParty, updateParty) => axios.put(urlParty + idParty, updateParty),
            deleteParty : idParty => axios.delete(urlParty + idParty)
        }
    },

    district(urlDistrict = baseUrl + 'district/'){
        return {
            fetchDistrict : () => axios.get(urlDistrict),
            fetchDistrictById : idDistrict => axios.get(urlDistrict + idDistrict),
            createDistrict : newDistrict => axios.post(urlDistrict, newDistrict),
            updateDistrict : (idDistrict, updateDistrict) => axios.put(urlDistrict + idDistrict, updateDistrict),
            deleteDistrict : idDistrict => axios.delete(urlDistrict + idDistrict)
        }
    },

    division(urlDivision = baseUrl + 'division/'){
        return {
            fetchDivision : () => axios.get(urlDivision),
            fetchDivisionById : idDivision => axios.get(urlDivision + idDivision),
            createDivision : newDivision => axios.post(urlDivision, newDivision),
            updateDivision : (idDivision, updateDivision) => axios.put(urlDivision + idDivision, updateDivision),
            deleteDivision : idDivision => axios.delete(urlDivision + idDivision)
        }
    },

    gNDivision(urlGNDivision = baseUrl + 'gNDivision/'){
        return {
            fetchGNDivision : () => axios.get(urlGNDivision),
            fetchGNDivisionById : idGNDivision => axios.get(urlGNDivision + idGNDivision),
            createGNDivision : newGNDivision => axios.post(urlGNDivision, newGNDivision),
            updateGNDivision : (idGNDivision, updateGNDivision) => axios.put(urlGNDivision + idGNDivision, updateGNDivision),
            deleteGNDivision : idGNDivision => axios.delete(urlGNDivision + idGNDivision)
        }
    },

    person(urlPerson = baseUrl + 'person/'){
        return {
            fetchPerson : () => axios.get(urlPerson),
            fetchPersonById : idPerson => axios.get(urlPerson + idPerson),
            createPerson : newPerson => axios.post(urlPerson, newPerson),
            updatePerson : (idPerson, updatePerson) => axios.put(urlPerson + idPerson, updatePerson),
            deletePerson : idPerson => axios.delete(urlPerson + idPerson)
        }
    },
}