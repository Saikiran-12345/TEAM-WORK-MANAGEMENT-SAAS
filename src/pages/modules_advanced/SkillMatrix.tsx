import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Search, Filter, ArrowUpDown, Download, Plus, Edit, Trash, Save, X, Activity, BarChart, Clock, Calendar, CheckSquare, Layers, Lock, Shield, Target, Users, Zap } from 'lucide-react';

// SkillMatrix Advanced Data Model
export interface SkillMatrixAdvancedRecord {
  id: string;
  advancedField1: string;
  advancedField2: string;
  advancedField3: string;
  advancedField4: string;
  advancedField5: string;
  advancedField6: string;
  advancedField7: string;
  advancedField8: string;
  advancedField9: string;
  advancedField10: string;
  advancedField11: string;
  advancedField12: string;
  advancedField13: string;
  advancedField14: string;
  advancedField15: string;
  advancedField16: string;
  advancedField17: string;
  advancedField18: string;
  advancedField19: string;
  advancedField20: string;
  advancedField21: string;
  advancedField22: string;
  advancedField23: string;
  advancedField24: string;
  advancedField25: string;
  advancedField26: string;
  advancedField27: string;
  advancedField28: string;
  advancedField29: string;
  advancedField30: string;
  advancedField31: string;
  advancedField32: string;
  advancedField33: string;
  advancedField34: string;
  advancedField35: string;
  advancedField36: string;
  advancedField37: string;
  advancedField38: string;
  advancedField39: string;
  advancedField40: string;
  advancedField41: string;
  advancedField42: string;
  advancedField43: string;
  advancedField44: string;
  advancedField45: string;
  advancedField46: string;
  advancedField47: string;
  advancedField48: string;
  advancedField49: string;
  advancedField50: string;
  advancedField51: string;
  advancedField52: string;
  advancedField53: string;
  advancedField54: string;
  advancedField55: string;
  advancedField56: string;
  advancedField57: string;
  advancedField58: string;
  advancedField59: string;
  advancedField60: string;

  status: 'Draft' | 'Active' | 'Archived';
  priority: 'Low' | 'Medium' | 'High';
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

export const SkillMatrixAdvancedView: React.FC = () => {
  const [data, setData] = useState<SkillMatrixAdvancedRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('desc');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
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
  const [formField51, setFormField51] = useState('');
  const [formField52, setFormField52] = useState('');
  const [formField53, setFormField53] = useState('');
  const [formField54, setFormField54] = useState('');
  const [formField55, setFormField55] = useState('');
  const [formField56, setFormField56] = useState('');
  const [formField57, setFormField57] = useState('');
  const [formField58, setFormField58] = useState('');
  const [formField59, setFormField59] = useState('');
  const [formField60, setFormField60] = useState('');

  const [status, setStatus] = useState('Draft');
  const [priority, setPriority] = useState('Medium');
  const [assignedTo, setAssignedTo] = useState('');

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
  const [error51, setError51] = useState('');
  const [error52, setError52] = useState('');
  const [error53, setError53] = useState('');
  const [error54, setError54] = useState('');
  const [error55, setError55] = useState('');
  const [error56, setError56] = useState('');
  const [error57, setError57] = useState('');
  const [error58, setError58] = useState('');
  const [error59, setError59] = useState('');
  const [error60, setError60] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const raw = localStorage.getItem('advanced_SkillMatrix_data');
      if (raw) setData(JSON.parse(raw));
      setIsLoading(false);
    }, 400);
  };

  const handleSave = () => {
    let isValid = true;
    if (!formField1) { setError1('This field is strictly required'); isValid = false; }
    if (!formField2) { setError2('This field is strictly required'); isValid = false; }
    if (!formField3) { setError3('This field is strictly required'); isValid = false; }
    if (!formField4) { setError4('This field is strictly required'); isValid = false; }
    if (!formField5) { setError5('This field is strictly required'); isValid = false; }
    if (!formField6) { setError6('This field is strictly required'); isValid = false; }
    if (!formField7) { setError7('This field is strictly required'); isValid = false; }
    if (!formField8) { setError8('This field is strictly required'); isValid = false; }
    if (!formField9) { setError9('This field is strictly required'); isValid = false; }
    if (!formField10) { setError10('This field is strictly required'); isValid = false; }
    if (!formField11) { setError11('This field is strictly required'); isValid = false; }
    if (!formField12) { setError12('This field is strictly required'); isValid = false; }
    if (!formField13) { setError13('This field is strictly required'); isValid = false; }
    if (!formField14) { setError14('This field is strictly required'); isValid = false; }

    if (!isValid) return;
    
    const newRecord: SkillMatrixAdvancedRecord = {
      id: editingId || crypto.randomUUID(),
      advancedField1: formField1,
      advancedField2: formField2,
      advancedField3: formField3,
      advancedField4: formField4,
      advancedField5: formField5,
      advancedField6: formField6,
      advancedField7: formField7,
      advancedField8: formField8,
      advancedField9: formField9,
      advancedField10: formField10,
      advancedField11: formField11,
      advancedField12: formField12,
      advancedField13: formField13,
      advancedField14: formField14,
      advancedField15: formField15,
      advancedField16: formField16,
      advancedField17: formField17,
      advancedField18: formField18,
      advancedField19: formField19,
      advancedField20: formField20,
      advancedField21: formField21,
      advancedField22: formField22,
      advancedField23: formField23,
      advancedField24: formField24,
      advancedField25: formField25,
      advancedField26: formField26,
      advancedField27: formField27,
      advancedField28: formField28,
      advancedField29: formField29,
      advancedField30: formField30,
      advancedField31: formField31,
      advancedField32: formField32,
      advancedField33: formField33,
      advancedField34: formField34,
      advancedField35: formField35,
      advancedField36: formField36,
      advancedField37: formField37,
      advancedField38: formField38,
      advancedField39: formField39,
      advancedField40: formField40,
      advancedField41: formField41,
      advancedField42: formField42,
      advancedField43: formField43,
      advancedField44: formField44,
      advancedField45: formField45,
      advancedField46: formField46,
      advancedField47: formField47,
      advancedField48: formField48,
      advancedField49: formField49,
      advancedField50: formField50,
      advancedField51: formField51,
      advancedField52: formField52,
      advancedField53: formField53,
      advancedField54: formField54,
      advancedField55: formField55,
      advancedField56: formField56,
      advancedField57: formField57,
      advancedField58: formField58,
      advancedField59: formField59,
      advancedField60: formField60,

      status: status as any,
      priority: priority as any,
      assignedTo,
      createdAt: editingId ? data.find(d => d.id === editingId)?.createdAt || new Date().toISOString() : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newData = editingId 
      ? data.map(d => d.id === editingId ? newRecord : d)
      : [...data, newRecord];
      
    setData(newData);
    localStorage.setItem('advanced_SkillMatrix_data', JSON.stringify(newData));
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
    setFormField51(''); setError51('');
    setFormField52(''); setError52('');
    setFormField53(''); setError53('');
    setFormField54(''); setError54('');
    setFormField55(''); setError55('');
    setFormField56(''); setError56('');
    setFormField57(''); setError57('');
    setFormField58(''); setError58('');
    setFormField59(''); setError59('');
    setFormField60(''); setError60('');

    setStatus('Draft');
    setPriority('Medium');
    setAssignedTo('');
    setEditingId(null);
    setIsFormOpen(false);
    setActiveTab('general');
  };

  const handleEdit = (record: SkillMatrixAdvancedRecord) => {
    setEditingId(record.id);
    setFormField1(record.advancedField1);
    setFormField2(record.advancedField2);
    setFormField3(record.advancedField3);
    setFormField4(record.advancedField4);
    setFormField5(record.advancedField5);
    setFormField6(record.advancedField6);
    setFormField7(record.advancedField7);
    setFormField8(record.advancedField8);
    setFormField9(record.advancedField9);
    setFormField10(record.advancedField10);
    setFormField11(record.advancedField11);
    setFormField12(record.advancedField12);
    setFormField13(record.advancedField13);
    setFormField14(record.advancedField14);
    setFormField15(record.advancedField15);
    setFormField16(record.advancedField16);
    setFormField17(record.advancedField17);
    setFormField18(record.advancedField18);
    setFormField19(record.advancedField19);
    setFormField20(record.advancedField20);
    setFormField21(record.advancedField21);
    setFormField22(record.advancedField22);
    setFormField23(record.advancedField23);
    setFormField24(record.advancedField24);
    setFormField25(record.advancedField25);
    setFormField26(record.advancedField26);
    setFormField27(record.advancedField27);
    setFormField28(record.advancedField28);
    setFormField29(record.advancedField29);
    setFormField30(record.advancedField30);
    setFormField31(record.advancedField31);
    setFormField32(record.advancedField32);
    setFormField33(record.advancedField33);
    setFormField34(record.advancedField34);
    setFormField35(record.advancedField35);
    setFormField36(record.advancedField36);
    setFormField37(record.advancedField37);
    setFormField38(record.advancedField38);
    setFormField39(record.advancedField39);
    setFormField40(record.advancedField40);
    setFormField41(record.advancedField41);
    setFormField42(record.advancedField42);
    setFormField43(record.advancedField43);
    setFormField44(record.advancedField44);
    setFormField45(record.advancedField45);
    setFormField46(record.advancedField46);
    setFormField47(record.advancedField47);
    setFormField48(record.advancedField48);
    setFormField49(record.advancedField49);
    setFormField50(record.advancedField50);
    setFormField51(record.advancedField51);
    setFormField52(record.advancedField52);
    setFormField53(record.advancedField53);
    setFormField54(record.advancedField54);
    setFormField55(record.advancedField55);
    setFormField56(record.advancedField56);
    setFormField57(record.advancedField57);
    setFormField58(record.advancedField58);
    setFormField59(record.advancedField59);
    setFormField60(record.advancedField60);

    setStatus(record.status);
    setPriority(record.priority);
    setAssignedTo(record.assignedTo);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Warning: This action cannot be undone. Proceed with deletion?')) return;
    const newData = data.filter(d => d.id !== id);
    setData(newData);
    localStorage.setItem('advanced_SkillMatrix_data', JSON.stringify(newData));
  };

  const filteredData = data
    .filter(d => 
      d.advancedField1.toLowerCase().includes(searchTerm.toLowerCase()) || 
      d.advancedField2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.advancedField3.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2"><Layers className="text-primary"/> {mod} Control Center</h1>
          <p className="text-text-secondary">Manage and analyze your advanced operational data</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" icon={Download}>Export CSV</Button>
            <Button onClick={() => setIsFormOpen(true)} icon={Plus}>Create Entity</Button>
        </div>
      </div>

      {/* Analytics Summary */}
      {!isFormOpen && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Card className="flex items-center gap-4"><div className="p-3 bg-primary-light text-primary rounded-lg"><Activity/></div><div><p className="text-sm text-text-secondary">Total Records</p><p className="text-2xl font-bold">{data.length}</p></div></Card>
              <Card className="flex items-center gap-4"><div className="p-3 bg-success-light text-success rounded-lg"><CheckSquare/></div><div><p className="text-sm text-text-secondary">Active Status</p><p className="text-2xl font-bold">{data.filter(d => d.status === 'Active').length}</p></div></Card>
              <Card className="flex items-center gap-4"><div className="p-3 bg-warning-light text-warning rounded-lg"><Target/></div><div><p className="text-sm text-text-secondary">High Priority</p><p className="text-2xl font-bold">{data.filter(d => d.priority === 'High').length}</p></div></Card>
              <Card className="flex items-center gap-4"><div className="p-3 bg-danger-light text-danger rounded-lg"><Shield/></div><div><p className="text-sm text-text-secondary">Draft Status</p><p className="text-2xl font-bold">{data.filter(d => d.status === 'Draft').length}</p></div></Card>
          </div>
      )}
      
      {isFormOpen ? (
        <Card noPadding className="flex flex-col md:flex-row overflow-hidden border-2 border-primary">
          <div className="w-full md:w-64 bg-surface-hover border-r border-border-light p-4 flex flex-col gap-2">
            <h3 className="font-bold text-text-secondary uppercase text-xs tracking-wider mb-2">Form Sections</h3>
            <button onClick={() => setActiveTab('general')} className={`text-left px-4 py-2 rounded ${activeTab === 'general' ? 'bg-primary text-white' : 'hover:bg-border-light'}`}>General Info</button>
            <button onClick={() => setActiveTab('details')} className={`text-left px-4 py-2 rounded ${activeTab === 'details' ? 'bg-primary text-white' : 'hover:bg-border-light'}`}>Detailed Data</button>
            <button onClick={() => setActiveTab('meta')} className={`text-left px-4 py-2 rounded ${activeTab === 'meta' ? 'bg-primary text-white' : 'hover:bg-border-light'}`}>Metadata</button>
            <button onClick={() => setActiveTab('config')} className={`text-left px-4 py-2 rounded ${activeTab === 'config' ? 'bg-primary text-white' : 'hover:bg-border-light'}`}>Configuration</button>
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6 border-b border-border-light pb-4">
              <h2 className="text-2xl font-bold">{editingId ? 'Edit' : 'Create'} {mod} Record</h2>
              <button onClick={resetForm} className="p-2 hover:bg-surface-hover rounded-full"><X className="text-text-muted hover:text-text-primary" /></button>
            </div>
            
            {activeTab === 'general' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
                    <Select label="Status" value={status} onChange={e=>setStatus(e.target.value)} options={[{value:'Draft',label:'Draft'},{value:'Active',label:'Active'},{value:'Archived',label:'Archived'}]}/>
                    <Select label="Priority" value={priority} onChange={e=>setPriority(e.target.value)} options={[{value:'Low',label:'Low'},{value:'Medium',label:'Medium'},{value:'High',label:'High'}]}/>
                    <Input label="Assigned To" value={assignedTo} onChange={e=>setAssignedTo(e.target.value)}/>
                    <Input label="Primary Field 1" value={formField1} onChange={e => { setFormField1(e.target.value); setError1(''); }} error={error1} />
                    <Input label="Primary Field 2" value={formField2} onChange={e => { setFormField2(e.target.value); setError2(''); }} error={error2} />
                    <Input label="Primary Field 3" value={formField3} onChange={e => { setFormField3(e.target.value); setError3(''); }} error={error3} />
                    <Input label="Primary Field 4" value={formField4} onChange={e => { setFormField4(e.target.value); setError4(''); }} error={error4} />
                    <Input label="Primary Field 5" value={formField5} onChange={e => { setFormField5(e.target.value); setError5(''); }} error={error5} />
                    <Input label="Primary Field 6" value={formField6} onChange={e => { setFormField6(e.target.value); setError6(''); }} error={error6} />
                    <Input label="Primary Field 7" value={formField7} onChange={e => { setFormField7(e.target.value); setError7(''); }} error={error7} />
                    <Input label="Primary Field 8" value={formField8} onChange={e => { setFormField8(e.target.value); setError8(''); }} error={error8} />
                    <Input label="Primary Field 9" value={formField9} onChange={e => { setFormField9(e.target.value); setError9(''); }} error={error9} />
                    <Input label="Primary Field 10" value={formField10} onChange={e => { setFormField10(e.target.value); setError10(''); }} error={error10} />
                    <Input label="Primary Field 11" value={formField11} onChange={e => { setFormField11(e.target.value); setError11(''); }} error={error11} />
                    <Input label="Primary Field 12" value={formField12} onChange={e => { setFormField12(e.target.value); setError12(''); }} error={error12} />
                    <Input label="Primary Field 13" value={formField13} onChange={e => { setFormField13(e.target.value); setError13(''); }} error={error13} />
                    <Input label="Primary Field 14" value={formField14} onChange={e => { setFormField14(e.target.value); setError14(''); }} error={error14} />
                    <Input label="Primary Field 15" value={formField15} onChange={e => { setFormField15(e.target.value); setError15(''); }} error={error15} />

                </div>
            )}
            
            {activeTab === 'details' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
                    <Input label="Detail Field 16" value={formField16} onChange={e => { setFormField16(e.target.value); setError16(''); }} error={error16} />
                    <Input label="Detail Field 17" value={formField17} onChange={e => { setFormField17(e.target.value); setError17(''); }} error={error17} />
                    <Input label="Detail Field 18" value={formField18} onChange={e => { setFormField18(e.target.value); setError18(''); }} error={error18} />
                    <Input label="Detail Field 19" value={formField19} onChange={e => { setFormField19(e.target.value); setError19(''); }} error={error19} />
                    <Input label="Detail Field 20" value={formField20} onChange={e => { setFormField20(e.target.value); setError20(''); }} error={error20} />
                    <Input label="Detail Field 21" value={formField21} onChange={e => { setFormField21(e.target.value); setError21(''); }} error={error21} />
                    <Input label="Detail Field 22" value={formField22} onChange={e => { setFormField22(e.target.value); setError22(''); }} error={error22} />
                    <Input label="Detail Field 23" value={formField23} onChange={e => { setFormField23(e.target.value); setError23(''); }} error={error23} />
                    <Input label="Detail Field 24" value={formField24} onChange={e => { setFormField24(e.target.value); setError24(''); }} error={error24} />
                    <Input label="Detail Field 25" value={formField25} onChange={e => { setFormField25(e.target.value); setError25(''); }} error={error25} />
                    <Input label="Detail Field 26" value={formField26} onChange={e => { setFormField26(e.target.value); setError26(''); }} error={error26} />
                    <Input label="Detail Field 27" value={formField27} onChange={e => { setFormField27(e.target.value); setError27(''); }} error={error27} />
                    <Input label="Detail Field 28" value={formField28} onChange={e => { setFormField28(e.target.value); setError28(''); }} error={error28} />
                    <Input label="Detail Field 29" value={formField29} onChange={e => { setFormField29(e.target.value); setError29(''); }} error={error29} />
                    <Input label="Detail Field 30" value={formField30} onChange={e => { setFormField30(e.target.value); setError30(''); }} error={error30} />

                </div>
            )}
            
            {activeTab === 'meta' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
                    <Input label="Meta Field 31" value={formField31} onChange={e => { setFormField31(e.target.value); setError31(''); }} error={error31} />
                    <Input label="Meta Field 32" value={formField32} onChange={e => { setFormField32(e.target.value); setError32(''); }} error={error32} />
                    <Input label="Meta Field 33" value={formField33} onChange={e => { setFormField33(e.target.value); setError33(''); }} error={error33} />
                    <Input label="Meta Field 34" value={formField34} onChange={e => { setFormField34(e.target.value); setError34(''); }} error={error34} />
                    <Input label="Meta Field 35" value={formField35} onChange={e => { setFormField35(e.target.value); setError35(''); }} error={error35} />
                    <Input label="Meta Field 36" value={formField36} onChange={e => { setFormField36(e.target.value); setError36(''); }} error={error36} />
                    <Input label="Meta Field 37" value={formField37} onChange={e => { setFormField37(e.target.value); setError37(''); }} error={error37} />
                    <Input label="Meta Field 38" value={formField38} onChange={e => { setFormField38(e.target.value); setError38(''); }} error={error38} />
                    <Input label="Meta Field 39" value={formField39} onChange={e => { setFormField39(e.target.value); setError39(''); }} error={error39} />
                    <Input label="Meta Field 40" value={formField40} onChange={e => { setFormField40(e.target.value); setError40(''); }} error={error40} />
                    <Input label="Meta Field 41" value={formField41} onChange={e => { setFormField41(e.target.value); setError41(''); }} error={error41} />
                    <Input label="Meta Field 42" value={formField42} onChange={e => { setFormField42(e.target.value); setError42(''); }} error={error42} />
                    <Input label="Meta Field 43" value={formField43} onChange={e => { setFormField43(e.target.value); setError43(''); }} error={error43} />
                    <Input label="Meta Field 44" value={formField44} onChange={e => { setFormField44(e.target.value); setError44(''); }} error={error44} />
                    <Input label="Meta Field 45" value={formField45} onChange={e => { setFormField45(e.target.value); setError45(''); }} error={error45} />

                </div>
            )}
            
            {activeTab === 'config' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
                    <Input label="Config Field 46" value={formField46} onChange={e => { setFormField46(e.target.value); setError46(''); }} error={error46} />
                    <Input label="Config Field 47" value={formField47} onChange={e => { setFormField47(e.target.value); setError47(''); }} error={error47} />
                    <Input label="Config Field 48" value={formField48} onChange={e => { setFormField48(e.target.value); setError48(''); }} error={error48} />
                    <Input label="Config Field 49" value={formField49} onChange={e => { setFormField49(e.target.value); setError49(''); }} error={error49} />
                    <Input label="Config Field 50" value={formField50} onChange={e => { setFormField50(e.target.value); setError50(''); }} error={error50} />
                    <Input label="Config Field 51" value={formField51} onChange={e => { setFormField51(e.target.value); setError51(''); }} error={error51} />
                    <Input label="Config Field 52" value={formField52} onChange={e => { setFormField52(e.target.value); setError52(''); }} error={error52} />
                    <Input label="Config Field 53" value={formField53} onChange={e => { setFormField53(e.target.value); setError53(''); }} error={error53} />
                    <Input label="Config Field 54" value={formField54} onChange={e => { setFormField54(e.target.value); setError54(''); }} error={error54} />
                    <Input label="Config Field 55" value={formField55} onChange={e => { setFormField55(e.target.value); setError55(''); }} error={error55} />
                    <Input label="Config Field 56" value={formField56} onChange={e => { setFormField56(e.target.value); setError56(''); }} error={error56} />
                    <Input label="Config Field 57" value={formField57} onChange={e => { setFormField57(e.target.value); setError57(''); }} error={error57} />
                    <Input label="Config Field 58" value={formField58} onChange={e => { setFormField58(e.target.value); setError58(''); }} error={error58} />
                    <Input label="Config Field 59" value={formField59} onChange={e => { setFormField59(e.target.value); setError59(''); }} error={error59} />
                    <Input label="Config Field 60" value={formField60} onChange={e => { setFormField60(e.target.value); setError60(''); }} error={error60} />

                </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-border-light flex justify-between items-center">
              <span className="text-sm text-text-muted">Ensure all strictly required fields are filled out before saving.</span>
              <div className="flex gap-4">
                <Button variant="outline" onClick={resetForm}>Cancel Changes</Button>
                <Button onClick={handleSave} icon={Save}>Commit Record</Button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="overflow-hidden shadow-md border border-border-dark" noPadding>
          <div className="p-4 bg-surface-hover flex justify-between items-center flex-wrap gap-4">
            <div className="relative w-full max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-text-muted" />
              <input type="text" placeholder="Deep Search across all fields..." className="input pl-10 w-full shadow-sm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" icon={Filter}>Advanced Filters</Button>
              <Button variant="outline" icon={Calendar}>Date Range</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-root border-y border-border-light text-sm uppercase tracking-wider text-text-muted">
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('status'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Status <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('priority'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Priority <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField1'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 1 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField2'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 2 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField3'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 3 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField4'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 4 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField5'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 5 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField6'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 6 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField7'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 7 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField8'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 8 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField9'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 9 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField10'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 10 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField11'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 11 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>
                  <th className="p-4 font-semibold cursor-pointer hover:text-text-primary" onClick={() => { setSortBy('advancedField12'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Field 12 <ArrowUpDown className="w-4 h-4 inline ml-1" /></th>

                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredData.length === 0 ? (
                  <tr><td colSpan={15} className="p-12 text-center text-text-muted flex flex-col items-center justify-center gap-4"><Zap className="w-12 h-12 opacity-20"/><span>No matching advanced records found in the database.</span></td></tr>
                ) : (
                  filteredData.map(record => (
                    <tr key={record.id} className="border-b border-border-light hover:bg-surface-hover transition-colors">
                      <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-bold ${record.status === 'Active' ? 'bg-success-light text-success' : record.status === 'Draft' ? 'bg-warning-light text-warning' : 'bg-surface border border-border-dark text-text-secondary'}`}>{record.status}</span></td>
                      <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-bold ${record.priority === 'High' ? 'bg-danger-light text-danger' : record.priority === 'Medium' ? 'bg-primary-light text-primary' : 'bg-surface border border-border-dark text-text-secondary'}`}>{record.priority}</span></td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField1}>{record.advancedField1}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField2}>{record.advancedField2}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField3}>{record.advancedField3}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField4}>{record.advancedField4}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField5}>{record.advancedField5}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField6}>{record.advancedField6}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField7}>{record.advancedField7}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField8}>{record.advancedField8}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField9}>{record.advancedField9}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField10}>{record.advancedField10}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField11}>{record.advancedField11}</td>
                      <td className="p-4 truncate max-w-[150px]" title={record.advancedField12}>{record.advancedField12}</td>

                      <td className="p-4 flex gap-2 justify-end">
                        <button onClick={() => handleEdit(record)} className="p-2 text-primary hover:bg-primary-light rounded transition-colors" title="Edit Record"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(record.id)} className="p-2 text-danger hover:bg-danger-light rounded transition-colors" title="Delete Record"><Trash className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-hover border-t border-border-light flex justify-between items-center text-sm text-text-secondary">
            <span>Showing {filteredData.length} records</span>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
