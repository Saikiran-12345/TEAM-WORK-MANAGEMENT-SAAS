import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Search, Filter, ArrowUpDown, Download, Plus, Edit, Trash, Save, X } from 'lucide-react';

// ApiKeys Data Model
export interface ApiKeysRecord {
  id: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
  field17: string;
  field18: string;
  field19: string;
  field20: string;
  field21: string;
  field22: string;
  field23: string;
  field24: string;
  field25: string;
  field26: string;
  field27: string;
  field28: string;
  field29: string;
  field30: string;
  field31: string;
  field32: string;
  field33: string;
  field34: string;
  field35: string;
  field36: string;
  field37: string;
  field38: string;
  field39: string;
  field40: string;
  field41: string;
  field42: string;
  field43: string;
  field44: string;
  field45: string;
  field46: string;
  field47: string;
  field48: string;
  field49: string;
  field50: string;

  createdAt: string;
  updatedAt: string;
}

export const ApiKeysView: React.FC = () => {
  const [data, setData] = useState<ApiKeysRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('desc');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [formField1, setFormField1] = useState('');
  const [formField2, setFormField2] = useState('');
  const [formField3, setFormField3] = useState('');
  const [formField4, setFormField4] = useState('');
  const [formField5, setFormField5] = useState('');
  const [formField6, setFormField6] = useState('');
  const [formField7, setFormField7] = useState('');
  const [formField8, setFormField8] = useState('');
  const [formField9, setFormField9] = useState('');
  const [formField10, setFormField10] = useState('');
  const [formField11, setFormField11] = useState('');
  const [formField12, setFormField12] = useState('');
  const [formField13, setFormField13] = useState('');
  const [formField14, setFormField14] = useState('');
  const [formField15, setFormField15] = useState('');
  const [formField16, setFormField16] = useState('');
  const [formField17, setFormField17] = useState('');
  const [formField18, setFormField18] = useState('');
  const [formField19, setFormField19] = useState('');
  const [formField20, setFormField20] = useState('');
  const [formField21, setFormField21] = useState('');
  const [formField22, setFormField22] = useState('');
  const [formField23, setFormField23] = useState('');
  const [formField24, setFormField24] = useState('');
  const [formField25, setFormField25] = useState('');
  const [formField26, setFormField26] = useState('');
  const [formField27, setFormField27] = useState('');
  const [formField28, setFormField28] = useState('');
  const [formField29, setFormField29] = useState('');
  const [formField30, setFormField30] = useState('');
  const [formField31, setFormField31] = useState('');
  const [formField32, setFormField32] = useState('');
  const [formField33, setFormField33] = useState('');
  const [formField34, setFormField34] = useState('');
  const [formField35, setFormField35] = useState('');
  const [formField36, setFormField36] = useState('');
  const [formField37, setFormField37] = useState('');
  const [formField38, setFormField38] = useState('');
  const [formField39, setFormField39] = useState('');
  const [formField40, setFormField40] = useState('');
  const [formField41, setFormField41] = useState('');
  const [formField42, setFormField42] = useState('');
  const [formField43, setFormField43] = useState('');
  const [formField44, setFormField44] = useState('');
  const [formField45, setFormField45] = useState('');
  const [formField46, setFormField46] = useState('');
  const [formField47, setFormField47] = useState('');
  const [formField48, setFormField48] = useState('');
  const [formField49, setFormField49] = useState('');
  const [formField50, setFormField50] = useState('');

  // Validation Errors
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const [error4, setError4] = useState('');
  const [error5, setError5] = useState('');
  const [error6, setError6] = useState('');
  const [error7, setError7] = useState('');
  const [error8, setError8] = useState('');
  const [error9, setError9] = useState('');
  const [error10, setError10] = useState('');
  const [error11, setError11] = useState('');
  const [error12, setError12] = useState('');
  const [error13, setError13] = useState('');
  const [error14, setError14] = useState('');
  const [error15, setError15] = useState('');
  const [error16, setError16] = useState('');
  const [error17, setError17] = useState('');
  const [error18, setError18] = useState('');
  const [error19, setError19] = useState('');
  const [error20, setError20] = useState('');
  const [error21, setError21] = useState('');
  const [error22, setError22] = useState('');
  const [error23, setError23] = useState('');
  const [error24, setError24] = useState('');
  const [error25, setError25] = useState('');
  const [error26, setError26] = useState('');
  const [error27, setError27] = useState('');
  const [error28, setError28] = useState('');
  const [error29, setError29] = useState('');
  const [error30, setError30] = useState('');
  const [error31, setError31] = useState('');
  const [error32, setError32] = useState('');
  const [error33, setError33] = useState('');
  const [error34, setError34] = useState('');
  const [error35, setError35] = useState('');
  const [error36, setError36] = useState('');
  const [error37, setError37] = useState('');
  const [error38, setError38] = useState('');
  const [error39, setError39] = useState('');
  const [error40, setError40] = useState('');
  const [error41, setError41] = useState('');
  const [error42, setError42] = useState('');
  const [error43, setError43] = useState('');
  const [error44, setError44] = useState('');
  const [error45, setError45] = useState('');
  const [error46, setError46] = useState('');
  const [error47, setError47] = useState('');
  const [error48, setError48] = useState('');
  const [error49, setError49] = useState('');
  const [error50, setError50] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    // Simulate loading local data
    setTimeout(() => {
      const raw = localStorage.getItem('ApiKeys_data');
      if (raw) setData(JSON.parse(raw));
      setIsLoading(false);
    }, 300);
  };

  const handleSave = () => {
    // Validation
    let isValid = true;
    if (!formField1) { setError1('Field 1 is required'); isValid = false; }
    if (!formField2) { setError2('Field 2 is required'); isValid = false; }
    if (!formField3) { setError3('Field 3 is required'); isValid = false; }
    if (!formField4) { setError4('Field 4 is required'); isValid = false; }
    if (!formField5) { setError5('Field 5 is required'); isValid = false; }
    if (!formField6) { setError6('Field 6 is required'); isValid = false; }
    if (!formField7) { setError7('Field 7 is required'); isValid = false; }
    if (!formField8) { setError8('Field 8 is required'); isValid = false; }
    if (!formField9) { setError9('Field 9 is required'); isValid = false; }
    if (!formField10) { setError10('Field 10 is required'); isValid = false; }

    if (!isValid) return;
    
    const newRecord: ApiKeysRecord = {
      id: editingId || crypto.randomUUID(),
      field1: formField1,
      field2: formField2,
      field3: formField3,
      field4: formField4,
      field5: formField5,
      field6: formField6,
      field7: formField7,
      field8: formField8,
      field9: formField9,
      field10: formField10,
      field11: formField11,
      field12: formField12,
      field13: formField13,
      field14: formField14,
      field15: formField15,
      field16: formField16,
      field17: formField17,
      field18: formField18,
      field19: formField19,
      field20: formField20,
      field21: formField21,
      field22: formField22,
      field23: formField23,
      field24: formField24,
      field25: formField25,
      field26: formField26,
      field27: formField27,
      field28: formField28,
      field29: formField29,
      field30: formField30,
      field31: formField31,
      field32: formField32,
      field33: formField33,
      field34: formField34,
      field35: formField35,
      field36: formField36,
      field37: formField37,
      field38: formField38,
      field39: formField39,
      field40: formField40,
      field41: formField41,
      field42: formField42,
      field43: formField43,
      field44: formField44,
      field45: formField45,
      field46: formField46,
      field47: formField47,
      field48: formField48,
      field49: formField49,
      field50: formField50,

      createdAt: editingId ? data.find(d => d.id === editingId)?.createdAt || new Date().toISOString() : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newData = editingId 
      ? data.map(d => d.id === editingId ? newRecord : d)
      : [...data, newRecord];
      
    setData(newData);
    localStorage.setItem('ApiKeys_data', JSON.stringify(newData));
    resetForm();
  };

  const resetForm = () => {
    setFormField1(''); setError1('');
    setFormField2(''); setError2('');
    setFormField3(''); setError3('');
    setFormField4(''); setError4('');
    setFormField5(''); setError5('');
    setFormField6(''); setError6('');
    setFormField7(''); setError7('');
    setFormField8(''); setError8('');
    setFormField9(''); setError9('');
    setFormField10(''); setError10('');
    setFormField11(''); setError11('');
    setFormField12(''); setError12('');
    setFormField13(''); setError13('');
    setFormField14(''); setError14('');
    setFormField15(''); setError15('');
    setFormField16(''); setError16('');
    setFormField17(''); setError17('');
    setFormField18(''); setError18('');
    setFormField19(''); setError19('');
    setFormField20(''); setError20('');
    setFormField21(''); setError21('');
    setFormField22(''); setError22('');
    setFormField23(''); setError23('');
    setFormField24(''); setError24('');
    setFormField25(''); setError25('');
    setFormField26(''); setError26('');
    setFormField27(''); setError27('');
    setFormField28(''); setError28('');
    setFormField29(''); setError29('');
    setFormField30(''); setError30('');
    setFormField31(''); setError31('');
    setFormField32(''); setError32('');
    setFormField33(''); setError33('');
    setFormField34(''); setError34('');
    setFormField35(''); setError35('');
    setFormField36(''); setError36('');
    setFormField37(''); setError37('');
    setFormField38(''); setError38('');
    setFormField39(''); setError39('');
    setFormField40(''); setError40('');
    setFormField41(''); setError41('');
    setFormField42(''); setError42('');
    setFormField43(''); setError43('');
    setFormField44(''); setError44('');
    setFormField45(''); setError45('');
    setFormField46(''); setError46('');
    setFormField47(''); setError47('');
    setFormField48(''); setError48('');
    setFormField49(''); setError49('');
    setFormField50(''); setError50('');

    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleEdit = (record: ApiKeysRecord) => {
    setEditingId(record.id);
    setFormField1(record.field1);
    setFormField2(record.field2);
    setFormField3(record.field3);
    setFormField4(record.field4);
    setFormField5(record.field5);
    setFormField6(record.field6);
    setFormField7(record.field7);
    setFormField8(record.field8);
    setFormField9(record.field9);
    setFormField10(record.field10);
    setFormField11(record.field11);
    setFormField12(record.field12);
    setFormField13(record.field13);
    setFormField14(record.field14);
    setFormField15(record.field15);
    setFormField16(record.field16);
    setFormField17(record.field17);
    setFormField18(record.field18);
    setFormField19(record.field19);
    setFormField20(record.field20);
    setFormField21(record.field21);
    setFormField22(record.field22);
    setFormField23(record.field23);
    setFormField24(record.field24);
    setFormField25(record.field25);
    setFormField26(record.field26);
    setFormField27(record.field27);
    setFormField28(record.field28);
    setFormField29(record.field29);
    setFormField30(record.field30);
    setFormField31(record.field31);
    setFormField32(record.field32);
    setFormField33(record.field33);
    setFormField34(record.field34);
    setFormField35(record.field35);
    setFormField36(record.field36);
    setFormField37(record.field37);
    setFormField38(record.field38);
    setFormField39(record.field39);
    setFormField40(record.field40);
    setFormField41(record.field41);
    setFormField42(record.field42);
    setFormField43(record.field43);
    setFormField44(record.field44);
    setFormField45(record.field45);
    setFormField46(record.field46);
    setFormField47(record.field47);
    setFormField48(record.field48);
    setFormField49(record.field49);
    setFormField50(record.field50);

    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    const newData = data.filter(d => d.id !== id);
    setData(newData);
    localStorage.setItem('ApiKeys_data', JSON.stringify(newData));
  };

  const filteredData = data
    .filter(d => d.field1.toLowerCase().includes(searchTerm.toLowerCase()) || d.field2.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a: any, b: any) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{mod} Management</h1>
        <Button onClick={() => setIsFormOpen(true)} icon={Plus}>Create New</Button>
      </div>
      
      {isFormOpen ? (
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{editingId ? 'Edit' : 'Create'} Record</h2>
            <button onClick={resetForm}><X className="text-text-muted hover:text-text-primary" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Input label="Field 1" value={formField1} onChange={e => { setFormField1(e.target.value); setError1(''); }} error={error1} />
            <Input label="Field 2" value={formField2} onChange={e => { setFormField2(e.target.value); setError2(''); }} error={error2} />
            <Input label="Field 3" value={formField3} onChange={e => { setFormField3(e.target.value); setError3(''); }} error={error3} />
            <Input label="Field 4" value={formField4} onChange={e => { setFormField4(e.target.value); setError4(''); }} error={error4} />
            <Input label="Field 5" value={formField5} onChange={e => { setFormField5(e.target.value); setError5(''); }} error={error5} />
            <Input label="Field 6" value={formField6} onChange={e => { setFormField6(e.target.value); setError6(''); }} error={error6} />
            <Input label="Field 7" value={formField7} onChange={e => { setFormField7(e.target.value); setError7(''); }} error={error7} />
            <Input label="Field 8" value={formField8} onChange={e => { setFormField8(e.target.value); setError8(''); }} error={error8} />
            <Input label="Field 9" value={formField9} onChange={e => { setFormField9(e.target.value); setError9(''); }} error={error9} />
            <Input label="Field 10" value={formField10} onChange={e => { setFormField10(e.target.value); setError10(''); }} error={error10} />
            <Input label="Field 11" value={formField11} onChange={e => { setFormField11(e.target.value); setError11(''); }} error={error11} />
            <Input label="Field 12" value={formField12} onChange={e => { setFormField12(e.target.value); setError12(''); }} error={error12} />
            <Input label="Field 13" value={formField13} onChange={e => { setFormField13(e.target.value); setError13(''); }} error={error13} />
            <Input label="Field 14" value={formField14} onChange={e => { setFormField14(e.target.value); setError14(''); }} error={error14} />
            <Input label="Field 15" value={formField15} onChange={e => { setFormField15(e.target.value); setError15(''); }} error={error15} />
            <Input label="Field 16" value={formField16} onChange={e => { setFormField16(e.target.value); setError16(''); }} error={error16} />
            <Input label="Field 17" value={formField17} onChange={e => { setFormField17(e.target.value); setError17(''); }} error={error17} />
            <Input label="Field 18" value={formField18} onChange={e => { setFormField18(e.target.value); setError18(''); }} error={error18} />
            <Input label="Field 19" value={formField19} onChange={e => { setFormField19(e.target.value); setError19(''); }} error={error19} />
            <Input label="Field 20" value={formField20} onChange={e => { setFormField20(e.target.value); setError20(''); }} error={error20} />
            <Input label="Field 21" value={formField21} onChange={e => { setFormField21(e.target.value); setError21(''); }} error={error21} />
            <Input label="Field 22" value={formField22} onChange={e => { setFormField22(e.target.value); setError22(''); }} error={error22} />
            <Input label="Field 23" value={formField23} onChange={e => { setFormField23(e.target.value); setError23(''); }} error={error23} />
            <Input label="Field 24" value={formField24} onChange={e => { setFormField24(e.target.value); setError24(''); }} error={error24} />
            <Input label="Field 25" value={formField25} onChange={e => { setFormField25(e.target.value); setError25(''); }} error={error25} />
            <Input label="Field 26" value={formField26} onChange={e => { setFormField26(e.target.value); setError26(''); }} error={error26} />
            <Input label="Field 27" value={formField27} onChange={e => { setFormField27(e.target.value); setError27(''); }} error={error27} />
            <Input label="Field 28" value={formField28} onChange={e => { setFormField28(e.target.value); setError28(''); }} error={error28} />
            <Input label="Field 29" value={formField29} onChange={e => { setFormField29(e.target.value); setError29(''); }} error={error29} />
            <Input label="Field 30" value={formField30} onChange={e => { setFormField30(e.target.value); setError30(''); }} error={error30} />
            <Input label="Field 31" value={formField31} onChange={e => { setFormField31(e.target.value); setError31(''); }} error={error31} />
            <Input label="Field 32" value={formField32} onChange={e => { setFormField32(e.target.value); setError32(''); }} error={error32} />
            <Input label="Field 33" value={formField33} onChange={e => { setFormField33(e.target.value); setError33(''); }} error={error33} />
            <Input label="Field 34" value={formField34} onChange={e => { setFormField34(e.target.value); setError34(''); }} error={error34} />
            <Input label="Field 35" value={formField35} onChange={e => { setFormField35(e.target.value); setError35(''); }} error={error35} />
            <Input label="Field 36" value={formField36} onChange={e => { setFormField36(e.target.value); setError36(''); }} error={error36} />
            <Input label="Field 37" value={formField37} onChange={e => { setFormField37(e.target.value); setError37(''); }} error={error37} />
            <Input label="Field 38" value={formField38} onChange={e => { setFormField38(e.target.value); setError38(''); }} error={error38} />
            <Input label="Field 39" value={formField39} onChange={e => { setFormField39(e.target.value); setError39(''); }} error={error39} />
            <Input label="Field 40" value={formField40} onChange={e => { setFormField40(e.target.value); setError40(''); }} error={error40} />
            <Input label="Field 41" value={formField41} onChange={e => { setFormField41(e.target.value); setError41(''); }} error={error41} />
            <Input label="Field 42" value={formField42} onChange={e => { setFormField42(e.target.value); setError42(''); }} error={error42} />
            <Input label="Field 43" value={formField43} onChange={e => { setFormField43(e.target.value); setError43(''); }} error={error43} />
            <Input label="Field 44" value={formField44} onChange={e => { setFormField44(e.target.value); setError44(''); }} error={error44} />
            <Input label="Field 45" value={formField45} onChange={e => { setFormField45(e.target.value); setError45(''); }} error={error45} />
            <Input label="Field 46" value={formField46} onChange={e => { setFormField46(e.target.value); setError46(''); }} error={error46} />
            <Input label="Field 47" value={formField47} onChange={e => { setFormField47(e.target.value); setError47(''); }} error={error47} />
            <Input label="Field 48" value={formField48} onChange={e => { setFormField48(e.target.value); setError48(''); }} error={error48} />
            <Input label="Field 49" value={formField49} onChange={e => { setFormField49(e.target.value); setError49(''); }} error={error49} />
            <Input label="Field 50" value={formField50} onChange={e => { setFormField50(e.target.value); setError50(''); }} error={error50} />

          </div>
          <div className="mt-8 flex justify-end gap-4">
            <Button variant="outline" onClick={resetForm}>Cancel</Button>
            <Button onClick={handleSave} icon={Save}>Save Record</Button>
          </div>
        </Card>
      ) : (
        <Card className="overflow-hidden" noPadding>
          <div className="p-4 border-b border-border-light flex justify-between items-center bg-surface-hover">
            <div className="relative w-64">
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-text-muted" />
              <input type="text" placeholder="Search..." className="input pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" icon={Filter}>Filter</Button>
              <Button variant="outline" icon={Download}>Export</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-hover border-b border-border-light">
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field1'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 1 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field2'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 2 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field3'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 3 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field4'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 4 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field5'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 5 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field6'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 6 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field7'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 7 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field8'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 8 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field9'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 9 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold text-text-secondary cursor-pointer hover:bg-border-light" onClick={() => { setSortBy('field10'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 10 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>

                  <th className="p-4 font-semibold text-text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr><td colSpan={11} className="p-8 text-center text-text-muted">No records found.</td></tr>
                ) : (
                  filteredData.map(record => (
                    <tr key={record.id} className="border-b border-border-light hover:bg-surface-hover">
                      <td className="p-4 truncate max-w-xs">{record.field1}</td>
                      <td className="p-4 truncate max-w-xs">{record.field2}</td>
                      <td className="p-4 truncate max-w-xs">{record.field3}</td>
                      <td className="p-4 truncate max-w-xs">{record.field4}</td>
                      <td className="p-4 truncate max-w-xs">{record.field5}</td>
                      <td className="p-4 truncate max-w-xs">{record.field6}</td>
                      <td className="p-4 truncate max-w-xs">{record.field7}</td>
                      <td className="p-4 truncate max-w-xs">{record.field8}</td>
                      <td className="p-4 truncate max-w-xs">{record.field9}</td>
                      <td className="p-4 truncate max-w-xs">{record.field10}</td>

                      <td className="p-4 flex gap-2">
                        <button onClick={() => handleEdit(record)} className="p-2 text-primary hover:bg-primary-light rounded"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(record.id)} className="p-2 text-danger hover:bg-danger-light rounded"><Trash className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};
